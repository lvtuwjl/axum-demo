pub mod error;

use error::AppError;

fn log_error(handler_name: &str) -> Box<dyn Fn(AppError) -> AppError> {
    let handler_name = handler_name.to_string();
    Box::new(move |err| {
        tracing::error!("操作失败：{:?},  {}", err, handler_name);
        err
    })
}
