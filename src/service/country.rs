use chrono::NaiveDateTime;

use sqlx::mysql::MySqlConnectOptions;
use sqlx::{ConnectOptions, MySqlConnection};

pub async fn get_hm() {
    let mut pool = MySqlConnectOptions::new()
        .username("root")
        .password("123456")
        .host("127.0.0.1")
        .database("asm")
        .connect()
        .await
        .unwrap();

    let mut stream = sqlx::query_as::<_, Hm>("SELECT * FROM hm WHERE 1 = ?")
        .bind(1)
        .fetch_all(&mut pool)
        .await
        .unwrap();

    println!("stream: {:#?}", stream);
}

#[derive(sqlx::FromRow, Debug)]
pub struct Hm {
    pub id: u32,
    pub name: Option<String>,
    pub created_at: Option<NaiveDateTime>,
    pub updated_at: Option<NaiveDateTime>,
    pub deleted_at: Option<NaiveDateTime>,
}
