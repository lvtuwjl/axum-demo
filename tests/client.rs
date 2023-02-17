//! http client use reqwest
//!
//!
// use axum_demo::*;
use serde::{Deserialize, Serialize};
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

    /// serde serialize enum -> number
    use serde_repr::*;

    #[derive(Serialize_repr, Deserialize_repr, PartialEq, Debug)]
    #[repr(u8)]
    enum SmallPrime {
        Two = 2,
        Three = 3,
        Five = 5,
        Seven = 7,
    }

    #[test]
    fn enum_serialize() {
        use SmallPrime::*;
        let nums = vec![Two, Three, Five, Seven];

        // Prints [2,3,5,7]
        println!("{}", serde_json::to_string(&nums).unwrap());

        assert_eq!(Three, serde_json::from_str("3").unwrap());
    }
}

static mut LP: i32 = 0;

/// test Future async/await
#[test]
#[tokio::main]
async fn test_() {
    let aa = AA { a: 9 };
    aa.await.unwrap();

    println!("end....");
}

#[derive(Debug)]
struct AA {
    a: i8,
}

#[cfg_attr(docsrs, doc(cfg(any(feature = "http1", feature = "http2"))))]
impl std::future::Future for AA {
    type Output = std::result::Result<(), bool>;

    fn poll(
        self: std::pin::Pin<&mut Self>,
        cx: &mut std::task::Context<'_>,
    ) -> std::task::Poll<Self::Output> {
        let waker = cx.waker().clone();

        std::thread::spawn(move || {
            // for i in 0..7 {
            std::thread::sleep(std::time::Duration::from_secs(1));
            println!("定时执行");
            waker.clone().wake();
            // }
        });

        // println!("wakkk:{:?}", waker);
        unsafe {
            println!("111:{}", LP);
            if LP == 5 {
                return std::task::Poll::Ready(Ok(()));
            }
            LP = LP + 1;
        }
        return std::task::Poll::Pending;
    }
}
