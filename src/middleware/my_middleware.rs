// use axum::{
//     // extract::Query,
//     // headers::authorization::{Authorization, Bearer},
//     http::{Method, Request, StatusCode},
//     middleware::{self, Next},
//     response::Response,
//     // routing::get,
//     // Router,
// };
// // use std::collections::HashMap;
//
// // pub async fn my_middleware<B>(
// //     // TypedHeader(auth): TypedHeader<Authorization<Bearer>>,
// //     Query(query_params): Query<HashMap<String, String>>,
// //     // you can add more extractors here but the last
// //     // extractor must implement `FromRequest` which
// //     // `Request` does
// //     req: Request<B>,
// //     next: Next<B>,
// // ) -> Response {
// //     // do something with `auth` and `query_params`...
// //     println!("my_middleware");
// //
// //     next.run(req).await
// // }
//
// pub async fn auth<B>(req: Request<B>, next: Next<B>) -> Result<Response, StatusCode> {
//     // let auth_header = req.headers()
//     //     .get(axum::http::header::AUTHORIZATION)
//     //     .and_then(|header| header.to_str().ok());
//
//     //  match auth_header {
//     //      Some(auth_header) if token_is_valid(auth_header) => {
//     //          Ok(next.run(req).await)
//     //      }
//     //      _ => Err(StatusCode::UNAUTHORIZED),
//     // }
//         println!("my_middleware");
//
//     match req.method() {
//         &Method::OPTIONS => Err(StatusCode::NO_CONTENT),
//         _ => Ok(next.run(req).await),
//     }
// }
//
// // fn token_is_valid(token: &str) -> bool {
// //     // ...
// //     false
// // }
