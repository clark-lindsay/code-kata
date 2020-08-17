import {firstUniqueChar} from '../src/firstUniqueChar';

describe('the firstUniqueChar function', () => {
	test('given an empty string, it returns -1', () => {
		expect(firstUniqueChar('')).toEqual(-1);
	})
})
