from string_util import overwrite_in_string


class Pencil:
    def __init__(self, point_durability=100, length=5):
        self.point_durability = self.max_point_durability = point_durability
        self.length = length

    def write(self, text):
        self._write_preconditions(text)
        written_text = ''
        for char in text:
            written_text += self._write_char(char)
        return written_text

    def edit(self, text, existingText, writeHeadPosition):
        textToInsert = ''
        for i in range(0, len(text)):
            if not existingText[writeHeadPosition + i].isspace():
                textToInsert += self._write_char('@')
            else:
                textToInsert += self._write_char(text[i])
        return overwrite_in_string(existingText, textToInsert, writeHeadPosition)

    def _write_char(self, char):
        if self.point_durability > 0:
            if not char.isspace():
                if char.isupper():
                    self.point_durability -= 2
                else:
                    self.point_durability -= 1
            return char
        else:
            return ' '

    def sharpen(self):
        if self.length > 0:
            self.point_durability = self.max_point_durability
            self.length -= 1

    def _write_preconditions(self, text):
        if type(text) is not str:
            raise ValueError('type of "text" must be "str"')
