//! http client use reqwest
//!
//!
// use axum_demo::*;
use serde::{Deserialize, Serialize};
use std::fmt::Debug;

pub async fn run_get() -> Result<(), reqwest::Error> {
    let res = reqwest::get("http://127.0.0.1:8080").await?;
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
fn test_() {
    use tokio::runtime::Builder;

    let aa = AA { _a: 9 };
    let rt = Builder::new_multi_thread().build().unwrap();
    rt.block_on(aa).unwrap();

    println!("end....");
}

#[derive(Debug)]
struct AA {
    _a: i8,
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

// #![allow(unused)]
//
// use std::future::Future;
// use std::pin::Pin;
// use std::task::{Context, Poll};
//
// #[derive(Debug, Clone)]
// struct AB {
//     name: String,
//     age: i8,
// }
//
// impl AB {
//     fn hp(self) -> String {
//         // let n = self.name;
//         std::mem::forget(self);
//         // let n = self.age.clone();
//         // println!("n:{}", n);
//         String::from("dfjs")
//     }
// }
//
// impl Drop for AB {
//     fn drop(&mut self) {
//         println!("11232");
//     }
// }
//
// #[tokio::main]
// async fn main() {
//     let mut s23 = String::from("ac");
//     let ff0 = &s23;
//
//     let sf21 = &mut s23;
//
//     let sf22 = sf21;
//     // let sf23 = sf22;
//
//     println!("s:{} {}", "", sf22);
//
//     // println!("s:{} {} {} {}", s23, sf21, sf22, sf23);
//
//     return;
//     // use std::collections::hash_map::DefaultHasher;
//     // use std::hash::{Hash, Hasher};
//     //
//     // let mut hasher = DefaultHasher::new();
//     // 1.hash(&mut hasher);
//     // println!("Hash is {:x}!", hasher.finish());
//     //
//     // return;
//     // let hh = AB {
//     //     name: String::from("jaa"),
//     //     age: 9,
//     // };
//     //
//     // println!("hh:{:?}", hh);
//     // hh.hp();
//     //
//     // return;
//     // {
//     //     let ggg = AA { age: 12 };
//     // }
//     println!("878787");
//     // std::thread::sleep(std::time::Duration::from_secs(10));
//
//     let aa = AA { age: 12 };
//     let _ = aa.await;
//     // for i in 0..10 {
//     //     std::thread::spawn(|| {
//     //         std::thread::sleep(std::time::Duration::from_secs(1));
//     //     })
//     // }
//     println!("hahahha");
//     std::thread::sleep(std::time::Duration::from_secs(10));
//     println!("endeee");
// }
//
// #[derive(Debug)]
// struct AA {
//     age: i8,
// }
//
// impl Future for AA {
//     type Output = ();
//     fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
//         println!("5555:{:?}", cx.waker());
//
//         // {
//         //     let wak11 = cx.waker().clone();
//         // }
//
//         /*        let wak = cx.waker().clone();
//         println!("6666:{:?}", wak);
//
//         std::thread::spawn(move || {
//             println!("777777:{:?}", wak);
//             unsafe {
//                 C += 1;
//             }
//
//             std::thread::sleep(std::time::Duration::from_secs(1));
//             println!("909090");
//             unsafe {
//                 // if C > 3 {
//                 // wak.wake_by_ref();
//                 wak.wake();
//                 // }
//             }
//
//             // wak.wake();
//         });
//         unsafe {
//             if C > 8 {
//                 return Poll::Ready(());
//             }
//         }*/
//
//         Poll::Pending
//     }
// }
//
// static mut C: i8 = 0;
//
// // use tokio::net::TcpStream;
// // use tokio::io::AsyncWriteExt;
// // use std::error::Error;
// //
// // #[tokio::main]
// // async fn main1() -> Result<(), Box<dyn Error>> {
// //     // Connect to a peer
// //     let mut stream = TcpStream::connect("127.0.0.1:8080").await?;
// //
// //     // Write some data.
// //     stream.write_all(b"hello world!").await?;
// //
// //     Ok(())
// // }
