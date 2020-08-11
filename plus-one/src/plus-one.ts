export function plusOne(intAsArray: number[]): number[] {
	if (intAsArray.length === 0) {
		throw new Error('the plusOne function requires a non-empty input');
	}

	const reversedResult = intAsArray.reverse();
	let overFlows = true;
	for (const [index, num] of reversedResult.entries()) {
		reversedResult[index] = (num + 1) % 10;
		if (reversedResult[index] !== 0) {
			overFlows = false;
			break;
		}
	}
	if (overFlows) {
		reversedResult.push(1);
	}

	return reversedResult.reverse();
}
