pub mod i32_vec_to_i32 {
    pub fn i32_vec_to_i32(int_as_vector: Vec<i32>) -> i32 {
        let mut power_of_ten: i32 = (int_as_vector.len() - 1).try_into().unwrap();
        return int_as_vector.iter().fold(0i32, |sum, val| {
            power_of_ten -= 1;
            return sum + (val * i32::pow(10, (power_of_ten + 1) as u32));
        });
    }
}

#[cfg(test)]
mod i32_vec_to_i32_tests {
use super::*;
    #[test]
    fn given_a_single_digit() {
        assert_eq!(i32_vec_to_i32(vec![1]), 1);
    }
}
