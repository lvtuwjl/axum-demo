use super::{
    Packet, Type,
    Type::{Handshake, Kick},
    HEAD_LENGTH, MAX_PACKET_SIZE,
};
use crate::Result;
use bytes::BytesMut;

pub trait Decoder {
    /// The type of items consumed by the `Decoder`
    type Item;

    /// Encodes a frame into the buffer provided.
    ///
    /// This method will encode `item` into the byte buffer provided by `dst`.
    /// The `dst` provided is an internal buffer of the `Framed` instance and
    /// will be written out when possible.
    fn decode(&self, data: &[u8]) -> Result<Vec<Self::Item>>;
}

pub struct PacketDecoder {}

impl PacketDecoder {
    fn forward(&self, buf: &mut BytesMut) -> Result<(usize, Type)> {
        let header = buf.split_to(HEAD_LENGTH);
        self.parse_header(header)
    }

    fn parse_header(&self, mut header: BytesMut) -> Result<(usize, Type)> {
        if header.len() != HEAD_LENGTH {
            return Err(format_err!("invalid header"));
        }
        let first = header.split_to(1)[0]; // 获取第一个元素 得到消息类型
        let typ = Type::try_from(first).unwrap();
        if typ < Handshake || typ > Kick {
            return Err(format_err!("wrong packet type"));
        }

        let size = vec_to_usize(header.split().as_ref());

        if size > MAX_PACKET_SIZE {
            return Err(format_err!("codec: packet size exceed"));
        }

        Ok((size, typ))
    }
}

impl Decoder for PacketDecoder {
    type Item = Packet;

    fn decode(&self, data: &[u8]) -> Result<Vec<Self::Item>> {
        let mut buf = BytesMut::from(data);
        let mut packets: Vec<Self::Item> = Vec::new();
        if buf.len() < HEAD_LENGTH {
            return Err(format_err!("wrong packet length"));
        }

        let (mut size, mut typ) = self.forward(&mut buf)?;
        while size <= buf.len() {
            let p = Packet {
                r#type: typ,
                length: size,
                data: buf.split_to(size).to_vec(),
            };
            packets.push(p);

            // if no more packets, break
            if buf.len() < HEAD_LENGTH {
                break;
            }

            (size, typ) = self.forward(&mut buf)?;
        }

        Ok(packets)
    }
}

fn vec_to_usize(b: &[u8]) -> usize {
    let mut result: usize = 0;
    for x in b {
        result = (result << 8) + *x as usize;
    }
    return result;
}

#[test]
fn test_decode() {
    let b = vec![0, 0, 0, 5, 97, 98, 99, 10, 101];
    let dec = PacketDecoder {};
    let res = dec.decode(&b);
    println!("res:{:?}", res);
}
