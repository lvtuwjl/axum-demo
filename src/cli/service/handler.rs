use crate::cli::codec::decoder::Decoder;
use crate::Result;

pub fn handle() -> Result<()> {
    loop {
        std::thread::sleep(std::time::Duration::from_secs(1));

        let dec = crate::cli::codec::PacketDecoder {};
        let packets = dec.decode(&vec![
            0, 0, 0, 5, 97, 98, 99, 10, 101, 2, 0, 0, 5, 96, 98, 99, 10, 101,
        ])?;

        if packets.len() < 2 {
            error!("Read no packets, data: {}", "msg");
            continue;
        }

        // process all packet
        for packet in packets {
            println!("packet:{:?}", packet);
            // let _ = process_packet(packet[i])?;
            // todo!();
        }
    }
}
