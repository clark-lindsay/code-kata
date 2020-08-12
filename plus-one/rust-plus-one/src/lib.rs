mod i32_vec_to_i32;

use crate::i32_vec_to_i32::transform;

pub fn plus_one(int_as_vector: Vec<i32>) -> Vec<i32> {
    let given_value: i32 = transform(int_as_vector) + 1;
    let result = format!("{}", given_value);
    return result.into_bytes().into_iter().map( |b| b as i32 - 48 ).collect::<Vec<i32>>();
}


#[cfg(test)]
mod plus_one_tests {
    use super::*;

    #[test]
    fn given_a_single_digit() {
        assert_eq!(plus_one(vec![0]), vec![1], "given [0], it returns [1]");
        assert_eq!(plus_one(vec![3]), vec![4], "given [3], it returns [4]");
        assert_eq!(plus_one(vec![8]), vec![9], "given [8], it returns [9]");
    }

    #[test]
    fn given_a_series_of_nines() {
        assert_eq!(plus_one(vec![9]), vec![1, 0], "given a [9], it returns [1, 0]");
        assert_eq!(plus_one(vec![9, 9]), vec![1, 0, 0], "given [9, 9], it returns [1, 0, 0]");
        assert_eq!(plus_one(vec![9, 9, 9]), vec![1, 0, 0, 0], "given [9, 9, 9], it returns [1, 0, 0, 0]");
    }
}
