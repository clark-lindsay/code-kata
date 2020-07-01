export function romanNumeralToInt(romanNumeral) {
    const upperCaseRomanNumeral = [...(romanNumeral.toUpperCase())];
    var result = 0;

    for (const [index, char] of upperCaseRomanNumeral.entries()) {
        const currentValue = convertRomanNumeralCharacterToInteger(char);

        if (index === upperCaseRomanNumeral.length - 1) (result += currentValue);
        else {
            const nextValue = convertRomanNumeralCharacterToInteger(upperCaseRomanNumeral[index + 1]);

            if (currentValue < nextValue) (result -= currentValue);
            else (result += currentValue);
        }
    }

    if (!result) {
        throw new InvalidRomanNumeralError();
    }

    return result;
}

function convertRomanNumeralCharacterToInteger(romanNumeralCharacter) {
    const romanNumeralToIntLookupTable = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    try {
        return romanNumeralToIntLookupTable[romanNumeralCharacter];
    }
    catch(error) {
        throw new InvalidRomanNumeralError();
    }
}

class InvalidRomanNumeralError extends Error {
    constructor(message = 'Valid roman numerals are I, V, X...') {
        super(message);
        this.name = "InvalidRomanNumeralError";
    }
}