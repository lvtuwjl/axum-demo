// use crate::Result;
// use chrono::prelude::*;
// use chrono::Local;
// use std::collections::BTreeMap;
// use tracing_appender::non_blocking::WorkerGuard;
// use tracing_appender::{non_blocking, rolling};
// use tracing_subscriber::filter::EnvFilter;
// use tracing_subscriber::prelude::*;
// use tracing_subscriber::{
//     fmt,
//     fmt::{format::Writer, layer, time::FormatTime},
// };

// pub struct CustomLayer;
//
// impl<S> tracing_subscriber::Layer<S> for CustomLayer
// where
//     S: tracing::Subscriber,
// {
//     fn on_event(
//         &self,
//         event: &tracing::Event<'_>,
//         _ctx: tracing_subscriber::layer::Context<'_, S>,
//     ) {
//         // Covert the values into a JSON object
//         let mut fields = BTreeMap::new();
//         let mut visitor = JsonVisitor(&mut fields);
//         event.record(&mut visitor);
//
//         // Output the event in JSON
//         let output = serde_json::json!({
//             "target": event.metadata().target(),
//             "caller": format!("{}",event.metadata().name()),
//             "level": format!("{}", event.metadata().level()),
//             "time":  format!("{:?}",Local::now()),
//             "fields": fields,
//         });
//         println!("{}", serde_json::to_string(&output).unwrap());
//         // let output = serde_json::json!({
//         //     "target": event.metadata().target(),
//         //     "caller": format!("{}",event.metadata().name()),
//         //     "level": format!("{}", event.metadata().level()),
//         //     "time":  format!("{:?}",Local::now()),
//         //     "fields": fields,
//         // });
//         // let output = format!(
//         //     "{:?} {} {} {} {}",
//         //     Local::now(),
//         //     event.metadata().level(),
//         //     event.metadata().target(),
//         //     event.metadata().name(),
//         //     serde_json::json!({ "fields": fields }),
//         // );
//         // println!("{}", output);
//     }
// }
//
// struct JsonVisitor<'a>(&'a mut BTreeMap<String, serde_json::Value>);
//
// impl<'a> tracing::field::Visit for JsonVisitor<'a> {
//     fn record_f64(&mut self, field: &tracing::field::Field, value: f64) {
//         self.0
//             .insert(field.name().to_string(), serde_json::json!(value));
//     }
//
//     fn record_i64(&mut self, field: &tracing::field::Field, value: i64) {
//         self.0
//             .insert(field.name().to_string(), serde_json::json!(value));
//     }
//
//     fn record_u64(&mut self, field: &tracing::field::Field, value: u64) {
//         self.0
//             .insert(field.name().to_string(), serde_json::json!(value));
//     }
//
//     fn record_bool(&mut self, field: &tracing::field::Field, value: bool) {
//         self.0
//             .insert(field.name().to_string(), serde_json::json!(value));
//     }
//
//     fn record_str(&mut self, field: &tracing::field::Field, value: &str) {
//         self.0
//             .insert(field.name().to_string(), serde_json::json!(value));
//     }
//
//     fn record_error(
//         &mut self,
//         field: &tracing::field::Field,
//         value: &(dyn std::error::Error + 'static),
//     ) {
//         self.0.insert(
//             field.name().to_string(),
//             serde_json::json!(value.to_string()),
//         );
//     }
//
//     fn record_debug(&mut self, field: &tracing::field::Field, value: &dyn std::fmt::Debug) {
//         self.0.insert(
//             field.name().to_string(),
//             serde_json::json!(format!("{:?}", value)),
//         );
//     }
// }

// // 用来格式化日志的输出时间格式
// pub struct LocalTimer;
//
// impl FormatTime for LocalTimer {
//     fn format_time(&self, w: &mut Writer<'_>) -> std::fmt::Result {
//         write!(w, "{}", Local::now().format("%FT%T%.6fZ"))
//     }
// }

// pub fn init() -> Result<(WorkerGuard)> {
//     let env_filter = EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("debug"));
//
//     // let (non_blocking_console, console_guard) = non_blocking(std::io::stdout());
//
//     // 输出到控制台中
//     let formatting_layer = fmt::layer()
//         .pretty()
//         .json()
//         .with_timer(LocalTimer)
//         .with_writer(std::io::stdout);
//     // .with_writer(non_blocking_console);
//     // .with_filter(EnvFilter::new("info"));
//
//     // 异步输出到文件中
//     let file_appender = rolling::never("logs", "app.log");
//     // todo! 如果不是在main函数中，guard必须返回到main()函数中，否则不输出任何信息到日志文件
//     let (non_blocking_appender, file_guard) = non_blocking(file_appender);
//
//     let file_layer = fmt::layer()
//         .pretty()
//         .json()
//         .with_ansi(false)
//         .with_timer(LocalTimer)
//         .with_writer(non_blocking_appender);
//     // .with_filter(EnvFilter::new("info"));
//
//     // Set up how `tracing-subscriber` will deal with tracing data.
//     tracing_subscriber::registry()
//         .with(env_filter)
//         // .with(CustomLayer.with_filter(FilterFn::new(|metadata| {
//         //     // Only enable spans or events with the target "interesting_things"
//         //     // metadata.target() == "interesting_things"
//         //     // metadata.level() <= &tracing::Level::DEBUG
//         //     metadata.level() <= &tracing::Level::DEBUG
//         // })))
//         .with(formatting_layer)
//         .with(file_layer) // 输出日志到log文件
//         .init();
//
//     Ok((file_guard))
// }

use chrono::Local;
use env_logger::fmt;
use env_logger::{Builder, Env};
use log::kv::{Error, Key, Value, Visitor};
use std::collections::BTreeMap;
use std::io::Write;

pub fn init() {
    // let env = Env::new().filter("MY_LOG").write_style("MY_LOG_STYLE");
    let env = Env::new().default_filter_or("debug");

    let mut builder = Builder::from_env(env);

    builder
        // .format(|buf, record| {
        //     let mut visitor = KvUnstableVisitor { kvs: String::new() };
        //     record.key_values().visit(&mut visitor);
        //
        //     write!(
        //         buf,
        //         "[{} {} {}] {}:{} {} {}\n",
        //         chrono::Local::now().to_rfc3339(),
        //         record.level(),
        //         record.module_path().unwrap_or("<unnamed>"),
        //         record.file().unwrap(),
        //         record.line().unwrap(),
        //         record.args(),
        //         visitor.kvs,
        //     )
        // })
        // .format(|buf, record| {
        //     let mut visitor = JsonKvUnstableVisitor {
        //         kvs: BTreeMap::new(),
        //     };
        //     record.key_values().visit(&mut visitor);
        //     let output = serde_json::json!({
        //         "time": Local::now().format("%FT%T%.6fZ").to_string(),
        //         "level":record.level(),
        //         "caller":format!("{}:{}",record.file().unwrap(),record.line().unwrap()),
        //         "target":record.module_path().unwrap_or("<unnamed>"),
        //         "msg":record.args(),
        //         "fields":serde_json::json!(visitor.kvs),
        //     });
        //     write!(buf, "{}\n", output)
        // })
        .init();

    info!("env_logger initialized.");
}

/// kv_unstable log features to version = "0.4.17"
struct KvUnstableVisitor {
    kvs: String,
}

impl<'kvs> Visitor<'kvs> for KvUnstableVisitor {
    fn visit_pair(&mut self, key: Key<'kvs>, value: Value<'kvs>) -> Result<(), Error> {
        self.kvs += format!("{}={} ", key, value).as_str();
        Ok(())
    }
}

/// kv_unstable log features to version = "0.4.17"
#[derive(Debug)]
struct JsonKvUnstableVisitor {
    kvs: BTreeMap<String, serde_json::Value>,
}

impl<'kvs> Visitor<'kvs> for JsonKvUnstableVisitor {
    fn visit_pair(&mut self, key: Key<'kvs>, value: Value<'kvs>) -> Result<(), Error> {
        self.kvs.insert(key.to_string(), serde_json::json!(value));
        Ok(())
    }
}
