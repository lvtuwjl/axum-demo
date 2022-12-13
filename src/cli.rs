use super::*;
use crate::router::start;
use clap::Arg;
use clap::Command;

pub struct Cli {}

impl Cli {
    pub fn new() -> Self {
        Cli {}
    }

    pub async fn run(&mut self) -> Result<()> {
        tracing::debug!("run app");
        let matches = Command::new("axum-demo")
            .version("0.1")
            .author("abc.com")
            .about("axum-rs")
            .subcommand(Command::new("printname").about("print name"))
            // .subcommand(Command::new("printport").about("print service port"))
            .subcommand(
                Command::new("startserver").about("start the server").arg(
                    Arg::new("port")
                        .short('p')
                        .long("port")
                        .help("the port bind to locally"),
                ),
            )
            .get_matches();

        if let Some(_) = matches.subcommand_matches("printname") {
            tracing::info!("app name:{}", "axum-test");
            // matches.get_one("")
            // } else if let Some(_) = matches.subcommand_matches("printport") {
            //     tracing::info!("port:{}","print port");
        } else if let Some(ref matches) = matches.subcommand_matches("startserver") {
            tracing::info!("server:{}", "start server");
            if let Some(port) = matches.get_one::<String>("port") {
                tracing::info!("listen port:{}", port);

                // start axum server
                start().await
            }
        }

        Ok(())
    }
}
