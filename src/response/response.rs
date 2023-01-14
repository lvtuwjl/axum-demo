use axum::http::StatusCode;
use axum::response::IntoResponse;
use axum::Json;
use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct Response<T> {
    code: i64,       // 消息码
    message: String, // 消息
    #[serde(skip_serializing_if = "Option::is_none")] // None跳过序列化
    data: Option<T>, // 数据
}

impl<T> Response<T> {
    pub fn new(code: i64, message: String, data: Option<T>) -> Self {
        Response {
            code,
            message,
            data,
        }
    }

    // pub fn success(&self) -> I {
    //     (StatusCode::OK, Json(self))
    // }
    //
    pub fn failed(self) -> (StatusCode, Json<Response<T>>) {
        (StatusCode::INTERNAL_SERVER_ERROR, Json(self))
    }

    // pub fn code(&self) -> impl IntoResponse {}
}

impl<T> From<crate::error::Error> for Response<T> {
    fn from(err: crate::error::Error) -> Self {
        Response {
            code: err.code(),
            message: err.message(),
            data: None,
        }
    }
}

#[cfg(test)]
mod test {
    use super::Data;
    use super::Response;

    #[test]
    fn test_serialize_response() {
        let r = Response::new(
            0,
            String::from("OK"),
            Some(Data {
                name: String::from("zs"),
                age: 7,
            }),
        );

        let s = serde_json::to_string(&r).unwrap();

        // println!("r:{:?}", r);
        println!("s:{}", s);
    }
}

#[derive(Debug, Serialize)]
struct Data {
    name: String,
    age: i32,
}

// impl Display for Data {
//     fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
//         write!(f, "da")
//     }
// }
