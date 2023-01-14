use uuid::Uuid;

pub fn uuid() -> String {
    let id = Uuid::new_v4().to_string().replace("-", "");
    // println!("id:{} {}", id, id.len());
    // output id:329c786fc7624e88b669b7e642c499f4 32

    return id;
}
