const binaryChop = require('./binaryChop');

describe('binaryChop', () => {
    test('works on an array of size: one', () => {
        const numbers = [1];

        expect(binaryChop(numbers, 1)).toBe(0);
    });
    test('works on an array of 4 elements', () => {
            const numbers = [0, 1, 2, 3];

            expect(binaryChop(numbers, 1)).toBe(1);
    });
    test('works on an array of 3 elements', () => {
        const numbers = [0, 2, 3];

        expect(binaryChop(numbers, 2)).toBe(1);
    });
    test('works on an empty array', () => {
        const numbers = [];

        expect(binaryChop(numbers, 2)).toBe(undefined);
    });
    test('works on an array with negative numbers', () => {
        const numbers = [-4, -3, -1, 0, 2, 5, 7];

        expect(binaryChop(numbers, -3)).toBe(1);
        expect(binaryChop(numbers, 5)).toBe(5);
    });
    test('works on an array of even size with negatives', () => {
        const numbers = [-4, -3, -1, 0, 5, 7];

        expect(binaryChop(numbers, -3)).toBe(1);
        expect(binaryChop(numbers, 5)).toBe(4);
    });
    test('works on an array with duplicates', () => {
        const numbers = [-4, -3, -3, -1, 0, 0, 3, 3, 4, 5, 7];

        expect(binaryChop(numbers, -4)).toBe(0);
        expect(binaryChop(numbers, 5)).toBe(9);
    });
    test('can find the last element', () => {
        const numbers = [-4, -3, -3, -1, 0, 0, 3, 3, 4, 5, 7];

        expect(binaryChop(numbers, 7)).toBe(10);
    });
    test('can find the first element', () => {
        const numbers = [-4, -3, -3, -1, 0, 0, 3, 3, 4, 5, 7];

        expect(binaryChop(numbers, -4)).toBe(0);
    });
});