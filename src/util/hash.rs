// hash algorithm
// use hmac_sha256::Hash;
//
// pub fn sha256(input: &[u8]) -> String {
//     let h = Hash::hash(input);
//
//     let out = hex::encode(h);
//     return out;
// }

#[test]
fn test_sha256() {
    use hmac_sha256::Hash;

    pub fn sha256(input: &[u8]) -> String {
        let h = Hash::hash(input);

        let out = hex::encode(h);
        return out;
    }

    let l = "a".as_bytes();
    let hs = sha256(l);

    // println!("{}", hs);
    assert_eq!(
        hs,
        "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"
    )
}
