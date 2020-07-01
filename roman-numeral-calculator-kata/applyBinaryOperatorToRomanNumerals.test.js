import { applyBinaryOperatorToRomanNumerals, InvalidRomanNumeralOperator } from './applyBinaryOperatorToRomanNumerals';

describe('applying binary operators to roman numerals', () => {
    it('can add two roman numerals', () => {
        expect(applyBinaryOperatorToRomanNumerals('IV', '+', 'I')).toEqual(5);
        expect(applyBinaryOperatorToRomanNumerals('X', '+', 'VI')).toEqual(16);
        expect(applyBinaryOperatorToRomanNumerals('MDL', '+', 'VIII')).toEqual(1558);
    });

    it('can subtract one roman numeral from another', () => {
        expect(applyBinaryOperatorToRomanNumerals('VII', '-', 'IV')).toEqual(3);
        expect(applyBinaryOperatorToRomanNumerals('XLV', '-', 'VII')).toEqual(38);
        expect(applyBinaryOperatorToRomanNumerals('MC', '-', 'D')).toEqual(600);
    });

    it('can produce the product of two roman numerals', () => {
        expect(applyBinaryOperatorToRomanNumerals('VII', '*', 'III')).toEqual(21);
        expect(applyBinaryOperatorToRomanNumerals('CXL', '*', 'II')).toEqual(280);
        expect(applyBinaryOperatorToRomanNumerals('II', '*', 'II')).toEqual(4);
    });

    it('can produce the quotient of two roman numerals', () => {
        expect(applyBinaryOperatorToRomanNumerals('XXI', '/', 'III')).toEqual(7);
        expect(applyBinaryOperatorToRomanNumerals('XLIX', '/', 'VII')).toEqual(7);
        expect(applyBinaryOperatorToRomanNumerals('M', '/', 'X')).toEqual(100);
        expect(applyBinaryOperatorToRomanNumerals('I', '/', 'II')).toEqual(0.5);
    });

    it('throws an error if it is given an operator besides +, -, *, or /', () => {
        expect(() => applyBinaryOperatorToRomanNumerals('II', '%', 'II')).toThrow(InvalidRomanNumeralOperator);
        expect(() => applyBinaryOperatorToRomanNumerals('II', '&', 'II')).toThrow(InvalidRomanNumeralOperator);
    });
});