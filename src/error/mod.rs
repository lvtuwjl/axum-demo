pub mod error;

use axum::http;
use chrono::Local;
use error::AppError;
use serde::Serialize;

fn log_error(handler_name: &str) -> Box<dyn Fn(AppError) -> AppError> {
    let handler_name = handler_name.to_string();
    Box::new(move |err| {
        tracing::error!("操作失败：{:?},  {}", err, handler_name);
        err
    })
}

#[derive(Debug)]
pub struct Error {
    code: i64,
    message: String,
}

impl Error {
    /// 创建新的错误信息
    pub fn new(code: i64, message: String) -> Self {
        Error { code, message }
    }

    /// get code
    pub fn code(&self) -> i64 {
        self.code
    }

    /// get message
    pub fn message(&self) -> String {
        self.message.clone()
    }
}
// impl From<std::io::Error> for Error {
//     fn from(_: std::io::Error) -> Self {
//         Error {
//             code: http::StatusCode::INTERNAL_SERVER_ERROR.as_u16() as i64,
//             message: http::StatusCode::INTERNAL_SERVER_ERROR.to_string(),
//         }
//     }
// }
