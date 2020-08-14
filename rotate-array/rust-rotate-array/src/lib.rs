fn rotate_vector(nums: Vec<i32>, rotationOffset: i32) -> Vec<i32> {
    return nums;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn given_empty_vec() {
        assert_eq!(rotate_vector(vec![], 1), vec![], "when given an empty vector, it returns an empty vector");
    }

    #[test]
    fn given_single_element_vec() {
        assert_eq!(rotate_vector(vec![1], 1), vec![1]);
        assert_eq!(rotate_vector(vec![1], 5), vec![1]);
        assert_eq!(rotate_vector(vec![1], 58), vec![1]);
    }
}
