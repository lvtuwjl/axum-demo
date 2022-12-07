#![allow(unused)]
mod cli;
mod db;
mod error;
mod middleware;
mod service;
mod util;
mod router;

use tracing_subscriber::{
    filter::{EnvFilter, LevelFilter},
    fmt::layer,
};
use crate::cli::Cli;

pub type Result<T> = std::result::Result<T, failure::Error>;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::builder()
                .with_default_directive(LevelFilter::DEBUG.into())
                .from_env_lossy(),
        )
        .init();

    let mut cli = Cli::new();
    if let Err(e) = cli.run().await {
        println!("Error: {}",e);
    }
}
