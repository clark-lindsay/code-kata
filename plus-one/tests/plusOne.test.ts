import {plusOne} from '../src/plus-one';

describe('the plusOne function', () => {
	it('returns [1] if the given array is [0]', () => {
		expect(plusOne([0])).toEqual([1]);
	});

	it('throws an error when it is given an empty array', () => {
		expect(() => plusOne([])).toThrow();
	});
});
