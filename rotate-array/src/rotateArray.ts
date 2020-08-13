export function rotateArray(nums: number[], rotationOffset: number = 1): number[] {
	const result = [...nums];
	nums.forEach((value, index) => {
		result[(index + rotationOffset) % result.length] = value;
});

	return result;
}
