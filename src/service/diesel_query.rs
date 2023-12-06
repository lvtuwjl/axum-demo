use chrono::NaiveDateTime;
use diesel::mysql::MysqlConnection;
use diesel::prelude::*;
// use futures::StreamExt;
// use std::env;
// use std::io::{stdin, Read};

pub fn establish_connection() -> MysqlConnection {
    // DATABASE_URL=mysql://root:123456@127.0.0.1/asm
    // let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let database_url = "mysql://root:123456@127.0.0.1/asm";
    MysqlConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

pub fn get_hm() {
    let connection = &mut establish_connection();

    use self::hm::dsl::*;
    let result = hm
        // .select(Hm::as_select())
        // .select(created_at).first::<NaiveDateTime>(connection)
        // filter(name.eq())
        // .limit(2)
        // .select(Hm::as_select()).first::<String>(connection)
        // .load::<(i32,String,NaiveDateTime)>(connection)
        .load::<Hm>(connection)
        .expect("Error loading hm");

    println!("result: {:#?}", result);
}

table! {
    hm (id){
        id -> Integer,
        name -> Nullable<Varchar>,
        created_at -> Nullable<Datetime>,
        updated_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
    }
}

// use diesel::deserialize::QueryableByName;
// use diesel::backend::Backend;
// use diesel::deserialize;
// use diesel::row::NamedRow;

#[derive(Queryable, Selectable, Debug)]
// #[diesel(check_for_backend(diesel::mysql::Mysql))]
// #[diesel(table_name = self::hm)]
#[diesel(table_name = hm)]
pub struct Hm {
    pub id: i32,
    pub name: Option<String>,
    pub created_at: Option<NaiveDateTime>,
    pub updated_at: Option<NaiveDateTime>,
    pub deleted_at: Option<NaiveDateTime>,
}
