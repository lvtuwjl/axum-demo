// use axum::http::{Method, StatusCode};
// use axum::http::{Request, Response};

// pub async fn never_called<B>(req: Request<B>) -> Request<B> {
//     // panic!("should never be called");
//     if req.method() == Method::OPTIONS {
//         println!("xxx:{:#?}", req.method());
//         // get_options().await;
//         // cors1111()
//     }
//
//     println!("1199:{:#?}", req.headers());
//     return req;
// }

// pub async fn set_header2<B>(mut req: Request<B>) -> Request<B> {
//     // panic!("should never be called")
//     // req.headers_mut()
//     //     .insert("x-from-fallback", "1".parse().unwrap());
//     // println!("33:{}","request");
//     return req;
// }

// pub async fn set_header<B>(mut res: Response<B>) -> Response<B> {
//     // res.headers_mut()
//     //     .insert("x-from-fallback", "1".parse().unwrap());
//     println!("44:{:?}", res.headers());
//     res
// }
