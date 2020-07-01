import {searchInsert} from '../src/index';

describe('the searchInsert function', () => {
	it('returns 0 for an empty list', () => {
		expect(searchInsert([], 1)).toBe(0);
	})

	it('will insert at the end if it is larger than all elements', () => {
		const nums: number[] = [1, 2, 3, 4];

		expect(searchInsert(nums, 5)).toBe(4);
	})

	it('will insert at the beginning if it is smaller than all elements', () => {
		const nums: number[] = [1, 2, 3, 4];

		expect(searchInsert(nums, 0)).toBe(0);
	})

	it('will find the right index even when the target already exists', () => {
		const nums: number[] = [1, 3, 5, 6];

		expect(searchInsert(nums, 5)).toBe(2);
		expect(searchInsert(nums, 2)).toBe(1);
		expect(searchInsert(nums, 4)).toBe(2);
	})
})
