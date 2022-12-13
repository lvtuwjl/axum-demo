#![allow(unused)]
mod cli;
mod client;
mod db;
mod error;
mod middleware;
mod router;
mod service;
mod util;

use crate::cli::Cli;
use tracing_subscriber::{
    filter::{EnvFilter, LevelFilter},
    fmt::layer,
};

pub type Result<T> = std::result::Result<T, failure::Error>;

#[tokio::main]
async fn main() ->reqwest::Result<()>{
    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::builder()
                .with_default_directive(LevelFilter::DEBUG.into())
                .from_env_lossy(),
        )
        .init();

    let mut cli = Cli::new();
    if let Err(e) = cli.run().await {
        println!("Error: {}", e);
    }

    let res = client::run_get().await;
    println!("res:{:?}",res);

    Ok(())
}
