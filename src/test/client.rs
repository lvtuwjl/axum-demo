//! http client use reqwest
//!
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fmt::Debug;

pub async fn run_get() -> Result<(), reqwest::Error> {
    let res = reqwest::get("https://dev-api.vland.live/wechat/js-sdk/sign").await?;
    let body = res.text().await?;
    println!("body = {:?}", body);

    let d: Body = serde_json::from_str(&body).unwrap();
    println!("body:{:?}", d);

    Ok(())
}

#[derive(Debug, Serialize, Deserialize)]
struct Body {
    code: i64,
    message: String,
    data: Data,
}

#[derive(Debug, Serialize, Deserialize)]
// #[serde(deny_unknown_fields)]
struct Data {
    #[serde(rename = "appId")]
    app_id: String,
    timestamp: i64,
    nonce: String,
    signature: String,
}

// pub async fn run_post() -> Result<(), reqwest::Error> {
//     let mut h = HashMap::new();
//     h.insert("phone","1478900");
//     h.insert("area","zh-CN");
//     let client = reqwest::Client::new();
//     let res = client
//         .post("http://localhost:8888/oss-direct-transfer/callback")
//         .header("x-oss-pub-key-url", "new_value")
//         // .body("the exact body that is sent")
//         .json(&&&d)
//         .send()
//         .await?;
//
//     println!("res:{:?}", res.status().to_string());
//
//     Ok(())
// }

#[cfg(test)]
mod test {
    #[tokio::main]
    async fn get_user() {
        let res = super::run_get().await;
        println!("res:{:?}", res);
    }

    #[test]
    fn test() {
        get_user()
    }
}
