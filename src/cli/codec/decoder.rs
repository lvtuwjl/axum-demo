use crate::cli::codec::Type::{Handshake, Kick};
use crate::cli::codec::{Packet, Type, HEAD_LENGTH, MAX_PACKET_SIZE};
use clap::Error;
use futures::future::ok;
use futures::SinkExt;

// use crate::Result;
struct Decoder {}

impl Decoder {
    fn decoder(&self, data: &[u8]) -> Result<Vec<Packet>, &str> {
        let mut packets: Vec<Packet> = Vec::new();
        if data.len() < HEAD_LENGTH {
            return Err("wrong packet length");
        }

        let typ = data[0];
        let typ = Type::try_from(typ).unwrap();
        if typ < Handshake || typ > Kick {
            return Err("wrong packet type");
        }

        let size = vec_to_usize(&data[1..HEAD_LENGTH]);

        if size > MAX_PACKET_SIZE {
            return Err("wrong packet max size");
        }

        if size <= data.len() - HEAD_LENGTH {
            let p = Packet {
                r#type: typ,
                length: size,
                data: data[HEAD_LENGTH..].to_vec(),
            };
            packets.push(p);
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

fn parse_header(header: Vec<u8>) {
    // if len(header) != HeadLength {
    // return 0, 0x00, packet.ErrInvalidPomeloHeader
    // }
    // typ := header[0]
    // if typ < packet.Handshake || typ > packet.API {
    // logger.Log.Debugf("ParseHeader typ < packet.Handshake || typ > packet.API,typ=%s", typ)
    // return 0, 0x00, packet.ErrWrongPomeloPacketType
    // }
    //
    // size := BytesToInt(header[1:])
    //
    // if size > MaxPacketSize {
    // return 0, 0x00, ErrPacketSizeExcced
    // }
    //
    // return size, packet.Type(typ), nil
}

#[test]
fn decoder_test() {
    let b = vec![1, 0, 0, 5, 97, 98, 99, 10, 101];
    let dec = Decoder {};
    let res = dec.decoder(&b);
    println!("res:{:?}", res);
}
