use crate::error::Error;
use crate::response::response::Response;
use crate::util::uuid::uuid;
use axum::{http::StatusCode, response::IntoResponse, Form, Json, Router};
use chrono::Local;
use serde::{Deserialize, Serialize};

// basic handler that responds with a static string
pub async fn root() -> &'static str {
    "Hello, World!"
}

pub async fn get_user(Form(gu): Form<GetUser>) -> impl IntoResponse {
    let db: sled::Db = sled::open("./db/user_db").unwrap();

    // get
    let user = db.get(gu.phone.as_bytes());
    if let Ok(None) = user {
        let resp = Response::new(500, String::from("此账号不存在"), None);
        // let resp = Response {
        //     code: 200,
        //     message: String::from("此账号不存在"),
        //     data: None,
        // };

        // return (StatusCode::OK, Json(resp));
        return Response::failed(resp);
    }

    // let user = db.get(gu.phone.as_bytes()).unwrap().unwrap().to_vec();

    let u: User = serde_json::from_slice(&user.unwrap().unwrap().to_vec()).unwrap();
    debug!("get_user service {}", "get_user");

    let resp = Response::new(200, "OK".to_string(), Some(u));
    // let resp = Response {
    //     code: 200,
    //     message: "OK".to_string(),
    //     data: Some(u),
    // };

    (StatusCode::OK, Json(resp))
}

pub async fn create_user(
    // this argument tells axum to parse the request body
    // as JSON into a `CreateUser` type
    Json(payload): Json<CreateUser>,
) -> impl IntoResponse {
    let db: sled::Db = sled::open("./db/user_db").unwrap();

    // first 查询当前手机号是否已经注册过 已注册直接返回注册
    if let Ok(Some(_)) = db.get(payload.phone.as_bytes()) {
        error!("手机号已注册");
        let err = Error::new(500, String::from("手机号已注册"));
        let res = Response::from(err);
        // let res = Response::new(500, String::from("手机号已注册"), None);
        // let res = Response {
        //     code: 500,
        //     message: String::from("手机号已注册"),
        //     data: None,
        // };
        return (StatusCode::OK, Json(res));
    }

    // insert your application logic here
    let user = User {
        id: uuid(),
        username: payload.username,
        password: payload.password,
        phone: payload.phone,
        sex: payload.sex,
        created: Local::now().timestamp(),
        updated: Local::now().timestamp(),
    };

    // println!("11:{}","create");

    // let db: sled::Db = sled::open("./db/user_db").unwrap();
    let b = serde_json::to_vec(&user).unwrap();

    // insert phone as key
    db.insert(user.phone.as_bytes(), b).unwrap();
    // this will be converted into a JSON response
    // with a status code of `201 Created`

    let res = Response::new(200, String::from("OK"), Some(user));
    // let res = Response {
    //     code: 200,
    //     message: String::from("OK"),
    //     data: Some(user),
    // };
    (StatusCode::OK, Json(res))
}

// the input to our `get_user` handler
#[derive(Debug, Deserialize)]
pub struct GetUser {
    phone: String,
}

// the input to our `create_user` handler
#[derive(Deserialize)]
pub struct CreateUser {
    username: String,
    password: String,
    phone: String,
    sex: String,
}

// the output to our `create_user` handler
#[derive(Serialize, Deserialize)]
pub struct User {
    id: String,
    username: String,
    password: String,
    phone: String,
    sex: String,
    created: i64,
    updated: i64,
}

// #[derive(Serialize, Deserialize)]
// pub struct Response<T: Sized /*+ IntoResponse*/> {
//     code: i64,
//     message: String,
//     #[serde(skip_serializing_if = "Option::is_none")] // None跳过序列化
//     data: Option<T>,
// }

pub async fn get_options() -> impl IntoResponse {
    debug!("get_options service {}", "get_options");
    (StatusCode::CREATED, "jda")
}
