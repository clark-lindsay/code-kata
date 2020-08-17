interface CharInfo {
	count: number
	firstIndex: number
}

export function firstUniqueChar(str: string): number {
	const charToInfo = getAllCharInfo(str);

	for (const info of Object.values(charToInfo)) {
		let result: CharInfo = {count: 0, firstIndex: str.length};

		if (info.count === 1) {
			if (info.firstIndex < result.firstIndex) {
				result = info;
			}
		}

		if (result.count === 1) {
			return result.firstIndex;
		}
	}

	return -1;
}

function getAllCharInfo(str: string): { [id: string]: CharInfo } {
	const result: { [id: string]: CharInfo } = {};

	for (const [index, char] of str.split('').entries()) {
		if (result[char] !== undefined) {
			result[char].count += 1;
		} else {
			result[char] = {count: 1, firstIndex: index};
		}
	}
	return result;
}
