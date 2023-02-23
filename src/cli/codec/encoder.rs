use super::{
    Type,
    Type::{Handshake, Kick},
    HEAD_LENGTH, MAX_PACKET_SIZE,
};
use crate::Result;

pub trait Encoder {
    /// The type of items consumed by the `Encoder`
    type Item;

    /// Encodes a frame into the buffer provided.
    ///
    /// This method will encode `item` into the byte buffer provided by `dst`.
    /// The `dst` provided is an internal buffer of the `Framed` instance and
    /// will be written out when possible.
    fn encode(&self, typ: Self::Item, data: &[u8]) -> Result<Vec<u8>>;
}

struct PacketEncoder {}

impl Encoder for PacketEncoder {
    type Item = Type;

    fn encode(&self, typ: Self::Item, data: &[u8]) -> Result<Vec<u8>> {
        if typ < Handshake || typ > Kick {
            error!("Encode type < Handshake || type > Kick, type = {:?}", typ);
            return Err(format_err!("wrong packet type"));
        }

        if data.len() > MAX_PACKET_SIZE {
            return Err(format_err!("codec: packet size exceed"));
        }

        let cap = HEAD_LENGTH + data.len();

        let mut buf: Vec<u8> = Vec::with_capacity(cap);
        buf.push(typ.into());
        let mut bb = usize_to_vec(data.len());
        buf.append(&mut bb);
        buf.append(&mut data.to_vec());

        Ok(buf)
    }
}

fn usize_to_vec(n: usize) -> Vec<u8> {
    let mut buf = Vec::<u8>::with_capacity(n);

    buf.push(((n >> 16) & 0xFF) as u8);
    buf.push(((n >> 16) & 0xFF) as u8);
    buf.push((n & 0xFF) as u8);

    return buf;
}

#[test]
fn encode_test() {
    let data = vec![97, 98, 99, 10, 101];
    let enc = PacketEncoder {};
    let res = enc.encode(Handshake, &data);
    println!("res:{:?}", res);
    // Output:
    // Ok([0, 0, 0, 5, 97, 98, 99, 10, 101])
}
