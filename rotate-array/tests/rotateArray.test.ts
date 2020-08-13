import {rotateArray} from '../src/rotateArray';

describe('the rotateArray function', () => {
	test('given an empty array. it returns an empty array', () => {
		expect(rotateArray([])).toEqual([]);
	});
});
