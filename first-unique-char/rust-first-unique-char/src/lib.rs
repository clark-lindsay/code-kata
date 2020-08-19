use std::collections::HashMap;

#[derive(Eq, PartialEq, Debug)]
struct CharInfo {
    first_index: usize,
    count: i32,
}

pub fn first_unique_char(text: &str) -> Option<usize> {
    let char_to_info = get_char_info(text);

    let mut result: Option<usize> = None;
    char_to_info.iter().for_each(|(_, info)| {
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

    #[test]
    fn given_long_strings() {
        let result = first_unique_char("'Good Morning!' said Bilbo, and he meant it. The sun was shining, and the grass was very green. But Gandalf looked at him from under long bushy eyebrows that stuck out further than the brim of his shady hat.

'What do you mean?' he said. 'Do you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on?'

'All of them at once,' said Bilbo. 'And a very fine morning for a pipe of tobacco out of doors, into the bargain.

...

'Good morning!' he said at last. 'We don't want any adventures here, thank you! You might try over The Hill or across The Water.' By this he meant that the conversation was at an end.
'What a lot of things you do use Good morning for!' said Gandalf. 'Now you mean that you want to get rid of me, and that it won't be good till I move off.'");
        match result {
            Some(index) => {
                assert_eq!(index, 6);
            }
            None => panic!(),
        }
    }
}
