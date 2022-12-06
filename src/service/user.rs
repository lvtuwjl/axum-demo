use axum::{http::StatusCode, response::IntoResponse, Json, Router};
use serde::{Deserialize, Serialize};
use std::time::SystemTime;

// basic handler that responds with a static string
pub async fn root() -> &'static str {
    "Hello, World!"
}

pub async fn get_user() -> impl IntoResponse {
    let db: sled::Db = sled::open("./db/user_db").unwrap();
    // println!("22:{}", "get_user");

    // get
    let user = db
        .get(String::from("1337").as_bytes())
        .unwrap()
        .unwrap()
        .to_vec();
    let u: User = serde_json::from_slice(&user).unwrap();
    tracing::debug!("get_user service {}","get_user");

    (StatusCode::OK, Json(u))
}

pub async fn create_user(
    // this argument tells axum to parse the request body
    // as JSON into a `CreateUser` type
    Json(payload): Json<CreateUser>,
) -> impl IntoResponse {
    // insert your application logic here
    let user = User {
        id: 1337,
        username: payload.username,
        password: payload.password,
        phone: payload.phone,
        sex: payload.sex,
        created: SystemTime::now()
            .duration_since(SystemTime::UNIX_EPOCH)
            .unwrap()
            .as_secs(),
        updated: SystemTime::now()
            .duration_since(SystemTime::UNIX_EPOCH)
            .unwrap()
            .as_secs(),
    };

    // println!("11:{}","create");

    let db: sled::Db = sled::open("./db/user_db").unwrap();
    let b = serde_json::to_vec(&user).unwrap();

    // insert
    db.insert(String::from(user.id.to_string()).as_bytes(), b)
        .unwrap();
    // this will be converted into a JSON response
    // with a status code of `201 Created`
    (StatusCode::CREATED, Json(user))
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
    id: u64,
    username: String,
    password: String,
    phone: String,
    sex: String,
    created: u64,
    updated: u64,
}

pub async fn get_options() -> impl IntoResponse {

    tracing::debug!("get_options service {}","get_options");
    (StatusCode::CREATED, "jda")
}
