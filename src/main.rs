// #![feature(negative_impls)] unstable nightly use for Sync trait
#![allow(unused)]
mod cli;
mod db;
mod error;
mod logger;
mod middleware;
mod response;
mod router;
mod service;
mod test;
mod util;

use crate::test::client;
use cli::Cli;

pub type Result<T> = std::result::Result<T, failure::Error>;

#[tokio::main]
async fn main() -> reqwest::Result<()> {
    // 初始化日志
    let _guard = logger::init();

    let mut cli = Cli::new();
    if let Err(e) = cli.run().await {
        println!("Error: {}", e);
    }

    Ok(())
}
