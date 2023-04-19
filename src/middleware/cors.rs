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
    debug!("cors middleware {}", "cors");

    let headers = req.headers().clone();
    let method = req.method().clone();
    let origin = headers
        .get(axum::http::header::ORIGIN)
        .and_then(|header| header.to_str().ok());

    let mut response = next.run(req).await;
    match origin {
        Some(origin) if origin_is_valid(origin) => {
            debug!("cors middleware {}", "origin");
            // Add Response Headers
            response.headers_mut().append(
                axum::http::header::ACCESS_CONTROL_ALLOW_ORIGIN.as_str(),
                origin.parse().unwrap(),
            );
            response.headers_mut().append(
                axum::http::header::ACCESS_CONTROL_ALLOW_HEADERS.as_str(),
                "Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,X-Data-Type,X-Requested-With,X-Data-Type,X-Auth-Token,header,clientParams,platform,client,Content-Disposition".parse().unwrap(),
            );
            response.headers_mut().append(
                axum::http::header::ACCESS_CONTROL_ALLOW_METHODS.as_str(),
                "GET,POST,OPTIONS,DELETE".parse().unwrap(),
            );
            response.headers_mut().append(
                axum::http::header::ACCESS_CONTROL_EXPOSE_HEADERS.as_str(),
                "Content-Length,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Content-Type,platform,Authorization,Content-Disposition".parse().unwrap(),
            );
            response.headers_mut().append(
                axum::http::header::ACCESS_CONTROL_MAX_AGE.as_str(),
                "3600".parse().unwrap(),
            );
            response.headers_mut().append(
                axum::http::header::ACCESS_CONTROL_ALLOW_CREDENTIALS.as_str(),
                "true".parse().unwrap(),
            );
        }
        _ => {}
    }

    match method {
        Method::OPTIONS => {
            *response.status_mut() = StatusCode::NO_CONTENT;
        }
        _ => {}
    }

    response
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
    debug!("cors middleware {}", "options");
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
