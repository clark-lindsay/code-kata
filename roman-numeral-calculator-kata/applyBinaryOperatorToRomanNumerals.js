import { romanNumeralToInt } from './romanNumeralToInt';

export function applyBinaryOperatorToRomanNumerals(firstOperand, operator, secondOperand) {
    const valueOfFirstOperand = romanNumeralToInt(firstOperand);
    const valueOfSecondOperand = romanNumeralToInt(secondOperand);

    if (operator === '+') return valueOfFirstOperand + valueOfSecondOperand;
    if (operator === '-') return valueOfFirstOperand - valueOfSecondOperand;
    if (operator === '*') return valueOfFirstOperand * valueOfSecondOperand;
    if (operator === '/') return valueOfFirstOperand / valueOfSecondOperand;

    throw new InvalidRomanNumeralOperator();
}

export class InvalidRomanNumeralOperator extends Error {
    constructor(message = 'Valid roman numeral operators are +, -, *, and / only') {
        super(message);
        this.name = 'InvalidRomanNumeralOperator';
    }
}