pub fn first_unique_char(text: &str) -> usize {
    return text.len();
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(first_unique_char(""), 0);
    }
}
