use std::convert::TryInto;

pub fn transform(int_as_vector: Vec<i32>) -> i32 {
    let mut power_of_ten: i32 = (int_as_vector.len() - 1).try_into().unwrap();
    return int_as_vector.iter().fold(0i32, |sum, val| {
        power_of_ten -= 1;
        return sum + (val * i32::pow(10, (power_of_ten + 1) as u32));
    });
}

#[cfg(test)]
mod i32_vec_to_i32_tests {
    use super::*;

    #[test]
    fn given_a_single_digit() {
        assert_eq!(transform(vec![1]), 1);
    }

    #[test]
    #[should_panic]
    fn given_an_empty_vec() {
        transform(vec![]);
    }

    #[test]
    fn given_arbitrary_digit_sequence() {
        assert_eq!(transform(vec![1, 9, 4, 5, 7]), 19457);
        assert_eq!(transform(vec![4, 2, 9, 1]), 4291);
        assert_eq!(transform(vec![2, 4, 7]), 247);
    }
}
