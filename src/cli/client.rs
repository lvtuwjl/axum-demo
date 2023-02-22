use crate::Result;
use std::error::Error;
use tokio::io::AsyncWriteExt;
use tokio::net::TcpStream;

pub async fn start() -> Result<()> {
    info!("client start success!");
    // Connect to a peer
    let mut stream = TcpStream::connect("127.0.0.1:3251").await?;
    info!("client start succeeeess!");

    // Write some data.
    stream.write_all(b"hello world!").await?;

    Ok(())
}
