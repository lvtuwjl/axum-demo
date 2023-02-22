use super::{Compact, Type};
use crate::cli::codec::Type::{Handshake, HandshakeAck, Kick};
use crate::cli::codec::{HEAD_LENGTH, MAX_PACKET_SIZE};
// use crate::Result;
struct Encoder {}

impl Encoder {
    fn encode(&self, typ: Type, data: &[u8]) -> Result<Vec<u8>, &str> {
        if typ < Handshake || typ > Kick {
            error!("Encode type < Handshake || type > Kick, type = {:?}", typ);
            return Err("wrong packet type");
        }

        if data.len() > MAX_PACKET_SIZE {
            return Err("codec: packet size exceed");
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
    let enc = Encoder {};
    let res = enc.encode(HandshakeAck, &data);
    println!("res:{:?}", res);
    assert_eq!(Ok(vec![1, 0, 0, 5, 97, 98, 99, 10, 101]), res)
}
