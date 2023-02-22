mod decoder;
mod encoder;

use num_enum::IntoPrimitive;
use num_enum::TryFromPrimitive;
use std::convert::TryFrom;

#[derive(Debug, PartialOrd, PartialEq, TryFromPrimitive, IntoPrimitive)]
#[repr(u8)]
enum Type {
    Handshake,
    HandshakeAck,
    Heartbeat,
    Data,
    Kick,
}

#[derive(Debug)]
pub struct Compact {
    pub len: usize,
    pub data: Vec<u8>,
}

// Codec constants.
const HEAD_LENGTH: usize = 4;
const MAX_PACKET_SIZE: usize = 1 << 24; //16MB

#[derive(Debug)]
struct Packet {
    r#type: Type,
    length: usize,
    data: Vec<u8>,
}
