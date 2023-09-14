use crate::error::Error;
use crate::global_db;
use crate::response::response::Response;
use crate::util::uuid::uuid;
use axum::{http::StatusCode, response::IntoResponse, Form, Json, Router};
use chrono::Local;
use serde::{Deserialize, Serialize};

pub async fn search(Form(query): Form<GetArticle>) -> impl IntoResponse {
    let article = global_db().get(query.title.as_bytes());
    if let Ok(None) = article {
        let resp = Response::new(500, String::from("文章不存在"), None);
        return Response::failed(resp);
    }

    let article: Article = serde_json::from_slice(&article.unwrap().unwrap().as_ref()).unwrap();
    let resp = Response::new(200, "OK".to_string(), Some(article));

    (StatusCode::OK, Json(resp))
}

pub async fn create(Json(payload): Json<CreateArticle>) -> impl IntoResponse {
    if let Ok(Some(_)) = global_db().get(payload.title.as_bytes()) {
        error!("文章已存在");
        let err = Error::new(500, String::from("文章已存在"));
        let res = Response::from(err);
        return (StatusCode::OK, Json(res));
    }

    let article = Article {
        id: uuid(),
        title: payload.title,
        content: payload.content,
        author: payload.author,
        created: Local::now().timestamp(),
        updated: Local::now().timestamp(),
    };

    let value = serde_json::to_vec(&article).unwrap();
    global_db().insert(article.title.as_bytes(), value).unwrap();
    let res = Response::new(200, String::from("OK"), Some(article));
    (StatusCode::OK, Json(res))
}

pub async fn update() -> impl IntoResponse {
    todo!()
}

pub async fn delete() -> impl IntoResponse {
    todo!()
}

// the input to our `get_user` handler
#[derive(Debug, Deserialize)]
pub struct GetArticle {
    title: String,
}

// the input to our `create_user` handler
#[derive(Deserialize)]
pub struct CreateArticle {
    title: String,
    content: String,
    author: String,
}

// the output to our `create_user` handler
#[derive(Serialize, Deserialize)]
pub struct Article {
    id: String,
    title: String,
    content: String,
    author: String,
    created: i64,
    updated: i64,
}
