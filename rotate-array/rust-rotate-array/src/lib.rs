fn rotate_vector(nums: Vec<i32>) -> Vec<i32> {
    return vec![];
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn given_empty_vec() {
        assert_eq!(rotate_vector(vec![]), vec![], "when given an empty vector, it returns an empty vector");
    }
}
