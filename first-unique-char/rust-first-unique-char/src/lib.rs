pub fn first_unique_char(text: &str) -> Option<usize> {
    None
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn given_an_empty_str() {
        let result = first_unique_char("");
        match result {
            Some(_) => panic!(),
            None => assert!(true)
        }
    }

    #[test]
    fn given_a_string_of_only_duplicates() {
        let result = first_unique_char("dood");
        match result {
            Some(_) => panic!(),
            None => assert!(true)
        }
    }
}
