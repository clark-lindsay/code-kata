import {plusOne} from '../src/plus-one';

describe('the plusOne function', () => {
	it('returns [1] if the given array is [0]', () => {
		expect(plusOne([0])).toBe([1]);
	});
});
