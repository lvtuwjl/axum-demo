use super::*;

use axum::{
    middleware::{from_extractor, from_fn, map_request, map_response},
    routing::{get, post},
    Router,
};
use std::net::SocketAddr;

use middleware::{
    auth::Auth,
    cors::{cors, options},
};
use service::user::*;

use tower_http::trace::TraceLayer;
use tracing_subscriber::{
    filter::{EnvFilter, LevelFilter},
    fmt::layer,
};

pub async fn start() {
    // initialize tracing
    // tracing_subscriber::fmt::init();
    // tracing_subscriber::fmt()
    //     .with_env_filter(
    //         EnvFilter::builder()
    //             .with_default_directive(LevelFilter::DEBUG.into())
    //             .from_env_lossy(),
    //     )
    //     .init();

    // build our application with a route
    // let app = Router::new();

    // `GET /` goes to `root`
    let nested = Router::new()
        .route("/", get(root))
        .route("/user", get(get_user))
        // `POST /users` goes to `create_user`
        .route("/user", post(create_user))
        .route("/options", get(get_options))
        .layer(TraceLayer::new_for_http())
        // .layer(map_request(never_called)) // 请求后中间件
        // .layer(map_request(set_header2))
        // .layer(map_response(set_header1)) // 返回前中间件
        // .layer(map_response(set_header));
        .route_layer(from_extractor::<Auth>()); // 授权认证

    // nest 嵌套路由
    let app = Router::new()
        .nest("", nested)
        .route_layer(from_fn(options)) // OPTIONS预检请求
        .route_layer(from_fn(cors)); // CORS跨域方案

    // run our app with hyper
    // `axum::Server` is a re-export of `hyper::Server`
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    // let sp = tracing::span!(tracing::Level::TRACE,"ha");
    // let _enter = sp.enter();
    tracing::debug!("listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
