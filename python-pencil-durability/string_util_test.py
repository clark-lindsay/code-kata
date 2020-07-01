from string_util import reverse, count_whitespace_chars, overwrite_in_string


def test_reverse_apple():
    assert reverse('apple') == 'elppa'


def test_reverse_empty_string_returns_empty():
    assert reverse('') == ''


def test_reverse_one_char_string_is_same():
    assert reverse('a') == 'a'


def test_count_whitespace_returns_one_given_a_single_space():
    assert count_whitespace_chars(' ') == 1


def test_count_whitespace_chars_given_no_spaces_returns_0():
    assert count_whitespace_chars('nospaces') == 0


def test_count_whitespace_chars_given_spaces_and_newlines():
    assert count_whitespace_chars('text with spaces \n') == 4


def test_count_whitespace_counts_all_space_escape_chars():
    assert count_whitespace_chars('\n\t\v\r\f') == 5


def test_overwrite_apple_a_day_with_onion():
    assert overwrite_in_string('An apple a day keeps the doctor away', 'onion',
                               3) == 'An onion a day keeps the doctor away'


def test_overwrite_at_start_of_string():
    assert overwrite_in_string('two word(s)', 'one', 0) == 'one word(s)'


def test_overwrite_at_end_of_string():
    assert overwrite_in_string('two words', ' and some more', len('two words')) == 'two words and some more'


def test_overwrite_empty_string_produces_insertedText():
    assert overwrite_in_string('', 'new stuff', 0) == 'new stuff'
