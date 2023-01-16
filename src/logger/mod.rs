use crate::Result;
use chrono::prelude::*;
use chrono::Local;
use std::collections::BTreeMap;
use tracing_appender::non_blocking::WorkerGuard;
use tracing_appender::{non_blocking, rolling};
use tracing_subscriber::filter::EnvFilter;
use tracing_subscriber::prelude::*;
use tracing_subscriber::{
    fmt,
    fmt::{format::Writer, layer, time::FormatTime},
};

// pub struct CustomLayer;
//
// impl CustomLayer {
//     // pub fn on_record<S>(&self, id: &span::Id, values: &span::Record<'_>, _: Context<'_, S>) {
//     //     if let Some(span) = try_lock!(self.by_id.read()).get(id) {
//     //         span.record_update(values);
//     //     }
//     // }
// }
//
// impl<S> Layer<S> for CustomLayer
// where
//     S: tracing::Subscriber,
// {
//     // fn on_record(&self, id: &span::Id, values: &span::Record<'_>, ctx: Context<'_, S>) {
//     //     self.on_record(id, values, ctx);
//     // }
//
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

// 用来格式化日志的输出时间格式
pub struct LocalTimer;

impl FormatTime for LocalTimer {
    fn format_time(&self, w: &mut Writer<'_>) -> std::fmt::Result {
        write!(w, "{}", Local::now().format("%FT%T%.6fZ"))
    }
}

pub fn init() -> Result<(WorkerGuard)> {
    let env_filter = EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("debug"));

    // let (non_blocking_console, console_guard) = non_blocking(std::io::stdout());

    // 输出到控制台中
    let formatting_layer = fmt::layer()
        .pretty()
        .json()
        .with_timer(LocalTimer)
        .with_writer(std::io::stdout);
    // .with_writer(non_blocking_console);
    // .with_filter(EnvFilter::new("info"));

    // 异步输出到文件中
    let file_appender = rolling::never("logs", "app.log");
    // todo! 如果不是在main函数中，guard必须返回到main()函数中，否则不输出任何信息到日志文件
    let (non_blocking_appender, file_guard) = non_blocking(file_appender);

    let file_layer = fmt::layer()
        .pretty()
        .json()
        .with_ansi(false)
        .with_timer(LocalTimer)
        .with_writer(non_blocking_appender);
    // .with_filter(EnvFilter::new("info"));

    // Set up how `tracing-subscriber` will deal with tracing data.
    tracing_subscriber::registry()
        .with(env_filter)
        // .with(CustomLayer.with_filter(FilterFn::new(|metadata| {
        //     // Only enable spans or events with the target "interesting_things"
        //     // metadata.target() == "interesting_things"
        //     // metadata.level() <= &tracing::Level::DEBUG
        //     metadata.level() <= &tracing::Level::DEBUG
        // })))
        .with(formatting_layer)
        .with(file_layer) // 输出日志到log文件
        .init();

    Ok((file_guard))
}
