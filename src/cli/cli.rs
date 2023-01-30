use crate::router;
use crate::Result;
use clap::Arg;
use clap::Command;

pub struct Cli {}

impl Cli {
    pub fn new() -> Self {
        Cli {}
    }

    pub async fn run(&mut self) -> Result<()> {
        debug!("run app");
        let matches = Command::new("axum-demo111")
            .version("0.1")
            .author("abc.com")
            .about("axum-rs")
            .subcommand(Command::new("printname").about("print name"))
            .subcommand(Command::new("printport").about("print service port"))
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
            info!("app name:{}", "axum-tests");
        // matches.get_one("")
        } else if let Some(_) = matches.subcommand_matches("printport") {
            info!("port:{}", "print port");
        } else if let Some(ref matches) = matches.subcommand_matches("startserver") {
            info!("server:{}", "start server");
            if let Some(port) = matches.get_one::<String>("port") {
                info!("listen port:{}", port);

                // start axum server
                router::start().await
            }
        }

        Ok(())
    }
}
