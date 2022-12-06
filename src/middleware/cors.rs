// use async_trait::async_trait;
use axum::http::{Method, Request, StatusCode};
use axum::middleware::{self, Next};
use axum::response::Response;
use axum::routing::MethodFilter;
use axum::{
    extract::FromRequestParts,
    http::{header, request::Parts},
};

pub async fn cors<B>(req: Request<B>, next: Next<B>) -> Response {
    tracing::debug!("cors middleware {}","cors");

    let origin = req.headers().clone();

    let origin = origin
        .get(axum::http::header::ORIGIN)
        .and_then(|header| header.to_str().ok());

    let mut res = next.run(req).await;
    match origin {
        Some(origin) if origin_is_valid(origin) => {
            tracing::debug!("cors middleware {}","origin");
            // 处理逻辑
            // let res = next.run(req).await;
            res = allow_origin(origin, res).await;
            res = allow_headers(res).await;
            res = allow_methods(res).await;
            res = expose_headers(res).await;
            res = max_age(res).await;
            res = allow_credentials(res).await;
        }
        _ => {}
    }

    res
}

fn origin_is_valid(origin: &str) -> bool {
    if origin == "" {
        return false;
    }
    // ...
    true
}

pub async fn options<B>(req: Request<B>, next: Next<B>) -> Result<Response, StatusCode> {
    // let auth_header = req.headers()
    //     .get(axum::http::header::AUTHORIZATION)
    //     .and_then(|header| header.to_str().ok());

    //  match auth_header {
    //      Some(auth_header) if token_is_valid(auth_header) => {
    //          Ok(next.run(req).await)
    //      }
    //      _ => Err(StatusCode::UNAUTHORIZED),
    // }
    tracing::debug!("cors middleware {}","options");
    match req.method() {
        &Method::OPTIONS => Err(StatusCode::NO_CONTENT),
        _ => Ok(next.run(req).await),
        // _ => Ok(res),
    }
}

async fn allow_origin<B>(origin: &str, mut res: Response<B>) -> Response<B> {
    res.headers_mut()
        .insert("Access-Control-Allow-Origin", origin.parse().unwrap());
    res
}

async fn allow_headers<B>(mut res: Response<B>) -> Response<B> {
    res.headers_mut()
        .insert("Access-Control-Allow-Headers", "Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token,header,clientParams,platform,client,Content-Disposition".parse().unwrap());
    res
}

async fn allow_methods<B>(mut res: Response<B>) -> Response<B> {
    res.headers_mut().insert(
        "Access-Control-Allow-Methods",
        "GET,POST,OPTIONS,HEAD,PUT,DELETE,PATCH".parse().unwrap(),
    );
    res
}

async fn expose_headers<B>(mut res: Response<B>) -> Response<B> {
    res.headers_mut()
        .insert("Access-Control-Expose-Headers", "Content-Length,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Content-Type,platform,Authorization,Content-Disposition".parse().unwrap());
    res
}

async fn max_age<B>(mut res: Response<B>) -> Response<B> {
    res.headers_mut()
        .insert("Access-Control-Max-Age", "3600".parse().unwrap());
    res
}

async fn allow_credentials<B>(mut res: Response<B>) -> Response<B> {
    res.headers_mut()
        .insert("Access-Control-Allow-Credentials", "true".parse().unwrap());
    res
}
