// fn r() {
//     let db: sled::Db = sled::open("./db/user_db").unwrap();
//
//     // insert and get
//     db.insert(b"yo!", b"v1").unwrap();
//     // assert_eq!(&db.get(b"yo!").unwrap().unwrap(), b"v1");
//
//     // Atomic compare-and-swap.
//     // let _ = db.compare_and_swap(
//     //     b"yo!",      // key
//     //     Some(b"v1"), // old value, None for not present
//     //     Some(b"v2"), // new value, None for delete
//     // ).unwrap();
//
//     // Iterates over key-value pairs, starting at the given key.
//     // let scan_key: &[u8] = b"a non-present key before yo!";
//     // let mut iter = db.range(scan_key..);
//     // assert_eq!(&iter.next().unwrap().unwrap().0, b"yo!");
//     // assert_eq!(iter.next(), None);
//     //
//     // db.remove(b"yo!");
//     // assert_eq!(db.get(b"yo!"), Ok(None));
//     //
//     // let other_tree: sled::Tree = db.open_tree(b"cool db facts").unwrap();
//     // other_tree
//     //     .insert(
//     //         b"k1",
//     //         &b"a Db acts like a Tree due to implementing Deref<Target = Tree>"[..],
//     //     )
//     //     .unwrap();
// }

#[test]
fn t1() {}
