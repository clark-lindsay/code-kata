from string_util import reverse, count_whitespace_chars


class Eraser:
    def __init__(self, durability=100):
        self.durability = durability

    def erase(self, toErase, text):
        self._erase_preconditions(toErase, text)
        reversedText = reverse(text)
        reversedToErase = reverse(toErase)[:self.durability + count_whitespace_chars(toErase)]
        replaceWith = ' ' * len(reversedToErase)
        self.durability -= len(replaceWith)

        editedText = reverse(reversedText.replace(reversedToErase, replaceWith, 1))
        self._erase_postconditions(text, editedText)
        return editedText

    def _erase_preconditions(self, toErase, text):
        if type(toErase) is not str:
            raise ValueError('expected toErase to be of type "str"')
        if type(text) is not str:
            raise ValueError('expected text to be of type "str"')

    def _erase_postconditions(self, text, editedText):
        if len(editedText) > len(text):
            raise ValueError('erased text became longer than original text')
