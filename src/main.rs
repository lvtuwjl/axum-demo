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
mod util;

#[macro_use]
extern crate log;

#[macro_use]
extern crate failure;

use cli::Cli;

pub type Result<T> = std::result::Result<T, failure::Error>;

#[tokio::main]
async fn main() -> Result<()> {
    service::download::get_hm();
    // 初始化日志
    // let _guard = logger::init();
    logger::init();

    let mut cli = Cli::new();
    if let Err(e) = cli.run().await {
        println!("Error: {}", e);
    }

    Ok(())
}

fn global_db() -> &'static sled::Db {
    use std::sync::OnceLock;
    static INSTANCE: OnceLock<sled::Db> = OnceLock::new();
    INSTANCE.get_or_init(|| sled::open("./db/user_db").unwrap())
}
