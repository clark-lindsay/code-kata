pub fn rotate_vector(nums: Vec<i32>, rotationOffset: usize) -> Vec<i32> {
    let mut result = nums.clone();
    nums.iter().enumerate().for_each(| (index, value) | {
        result[(index + rotationOffset) % nums.len()] = *value;
    });
    return result;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn given_empty_vec() {
        assert_eq!(rotate_vector(vec![], 1), vec![], "when given an empty vector, it returns an empty vector");
        assert_eq!(rotate_vector(vec![], 7), vec![], "when given an empty vector, it returns an empty vector");
        assert_eq!(rotate_vector(vec![], 100), vec![], "when given an empty vector, it returns an empty vector");
    }

    #[test]
    fn given_single_element_vec() {
        assert_eq!(rotate_vector(vec![1], 1), vec![1]);
        assert_eq!(rotate_vector(vec![1], 5), vec![1]);
        assert_eq!(rotate_vector(vec![1], 58), vec![1]);
    }

    #[test]
    fn given_arbitrary_vectors() {
        assert_eq!(rotate_vector(vec![1, 2, 3], 2), vec![2, 3, 1]);
        assert_eq!(rotate_vector(vec![-1, 7, 105, 14, -32], 4), vec![7, 105, 14, -32, -1]);
        assert_eq!(rotate_vector(vec![4, 18, 37, -9], 5), vec![-9, 4, 18, 37]);

        let many_ones: Vec<i32> = (0..9999).collect::<Vec<i32>>().iter().map(|_| 1).collect();
        assert_eq!(rotate_vector(many_ones.clone(), 5), many_ones.clone());
    }
}
