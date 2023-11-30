use std::net::TcpListener;
use std::thread;
use tungstenite::accept;

fn main() {
    let server = TcpListener::bind("0.0.0.0:9001").unwrap();
    for stream in server.incoming() {
        thread::spawn(move || {
            let mut ws = accept(stream.unwrap()).unwrap();
            loop {
                let msg = ws.read().unwrap();

                // We do not want to send back ping/pong messages.
                if msg.is_binary() || msg.is_text() {
                    ws.send(msg).unwrap();
                }
            }
        });
    }
}
