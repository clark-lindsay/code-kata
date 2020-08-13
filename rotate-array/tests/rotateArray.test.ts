import {rotateArray} from '../src/rotateArray';

describe('the rotateArray function', () => {
	test('given an empty array. it returns an empty array', () => {
		expect(rotateArray([])).toEqual([]);
	});

	test('given a single digit array, it should be returned identically', () => {
		expect(rotateArray([1])).toEqual([1]);
	});

	test('given any array of nums, it should return the rotated array', () => {
		expect(rotateArray([1, 2, 3], 2)).toEqual([2, 3, 1]);
		expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5,6,7,1,2,3,4]);
		expect(rotateArray([-1,-100,3,99], 2)).toEqual([3,99,-1,-100]);
	});
});
