export function searchInsert(nums: number[], target: number): number {
	for (const [index, element] of nums.entries()) {
		if (target < element || target == element) {
			return index;	
		}
	}
	return nums.length;
};
