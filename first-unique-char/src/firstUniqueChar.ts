export function firstUniqueChar(str: string): number {
	if (str.length === 0) return -1;

	const numberOfAppearances: { [id: string]: number } = {};
	for (const char of str) {
		if (numberOfAppearances[char]) {
			numberOfAppearances[char] += 1;
		} else {
			numberOfAppearances[char] = 1;
		}
	}

	for (const [char, count] of Object.entries(numberOfAppearances)) {
		if (count === 1) {
			return str.indexOf(char);
		}

		return -1;
	}
}
