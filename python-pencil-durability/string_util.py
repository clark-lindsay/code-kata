def reverse(text):
    return text[::-1]


def count_whitespace_chars(text):
    return len([char for char in list(text) if char.isspace()])


def overwrite_in_string(text, textToInsert, insertionPosition):
    return text[:insertionPosition] + textToInsert + text[insertionPosition + len(textToInsert):]
