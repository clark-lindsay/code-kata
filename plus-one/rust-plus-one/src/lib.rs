pub fn plus_one(int_as_vector: Vec<i32>) -> Vec<i32> {
    match int_as_vector.last().copied() {
        Some(last) => return vec![last + 1],
        None => panic!("The vector is empty!"),
    }
}

#[cfg(test)]
mod tests {
use super::*;
    #[test]
    fn given_0() {
        assert_eq!(plus_one(vec![0]), vec![1], "given [0], it returns [1]");
    }

    #[test]
    fn given_3() {
        assert_eq!(plus_one(vec![3]), vec![4], "given [3], it returns [4]");
    }
}
