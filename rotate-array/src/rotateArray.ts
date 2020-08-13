export function rotateArray(nums: number[], rotationOffset: number = 1): number[] {
	const result = [...nums];
	for (const [index, value] of nums.entries()) {
		result[(index + rotationOffset) % result.length] = value;
	}

	return result;
}
