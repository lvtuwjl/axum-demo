use diesel::mysql::MysqlConnection;
use diesel::prelude::*;
use std::env;
use std::io::{stdin, Read};
use std::time::SystemTime;

pub fn establish_connection() -> MysqlConnection {
    // DATABASE_URL=mysql://root:123456@127.0.0.1/asm
    // let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let database_url = "mysql://root:123456@127.0.0.1/asm";
    MysqlConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

#[derive(Queryable, Selectable,Debug)]
#[diesel(table_name = self::hm)]
// #[diesel(table_name = hms)]
pub struct Hm {
    pub id: i64,
    pub name: String,
    // pub created_at: SystemTime,
    // pub updated_at: SystemTime,
    // pub deleted_at: SystemTime,
}

pub fn get_hm() {
    let connection = &mut establish_connection();

    use self::hm::dsl::*;
    // let result = hm.first::<Hm>(connection);
    let result = hm.
        select(name).first::<String>(connection)
        // filter(name.eq())
        // .limit(2).
        // select(Hm::as_select())
        // .load(connection)
        .expect("Error loading hm");

    println!("result: {:?}", result);
}

table! {
    hm (id) {
        id -> Integer,
        name -> Varchar,
        // created_at -> Datetime,
        // updated_at -> Datetime,
        // deleted_at -> Datetime,
    }
}
