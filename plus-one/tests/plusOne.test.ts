import {plusOne} from '../src/plus-one';

describe('the plusOne function', () => {
	it('throws an error when it is given an empty array', () => {
		expect(() => plusOne([])).toThrow();
	});

	it('returns the next number for any single-digit input', () => {
		expect(plusOne([0])).toEqual([1]);
		expect(plusOne([3])).toEqual([4]);
		expect(plusOne([8])).toEqual([9]);
	});
});
