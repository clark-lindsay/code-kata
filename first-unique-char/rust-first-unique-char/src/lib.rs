use std::collections::HashMap;

#[derive(Eq, PartialEq, Debug)]
struct CharInfo {
    first_index: usize,
    count: i32,
}

pub fn first_unique_char(text: &str) -> Option<usize> {
    let chars = get_char_info(text);

    let mut result: Option<usize> = None;
    chars.iter().for_each(|(_, info)| {
        if info.count == 1 {
            match result {
                None => result = Some(info.first_index),
                Some(x) => {
                    if info.first_index < x {
                        result = Some(info.first_index)
                    }
                }
            }
        }
    });
    return result;
}

fn get_char_info(text: &str) -> HashMap<char, CharInfo> {
    let mut result = HashMap::new();
    text.char_indices().for_each(|(index, char)| {
        let info = result.entry(char).or_insert(CharInfo {
            first_index: index,
            count: 0,
        });
        info.count += 1;
    });

    return result;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn given_an_empty_str() {
        let result = first_unique_char("");
        match result {
            Some(_) => panic!(),
            None => assert!(true),
        }
    }

    #[test]
    fn given_a_string_of_only_duplicates() {
        let result = first_unique_char("dood");
        match result {
            Some(_) => panic!(),
            None => assert!(true),
        }
    }
    #[test]
    fn given_a_single_character_string() {
        let result = first_unique_char("d");
        match result {
            Some(index) => {
                assert_eq!(index, 0);
            }
            None => panic!(),
        }
    }

    #[test]
    fn given_a_string_with_multiple_cases() {
        let result = first_unique_char("Anna");
        match result {
            Some(index) => {
                assert_eq!(index, 0);
            }
            None => panic!(),
        }

        let result = first_unique_char("aNna");
        match result {
            Some(index) => {
                assert_eq!(index, 1);
            }
            None => panic!(),
        }

        let result = first_unique_char("hAnnah");
        match result {
            Some(index) => {
                assert_eq!(index, 1);
            }
            None => panic!(),
        }
    }
}
