import {firstUniqueChar} from '../src/firstUniqueChar';

describe('the firstUniqueChar function', () => {
	test('given an empty string, it returns -1', () => {
		expect(firstUniqueChar('')).toEqual(-1);
	});

	test('given a string with all duplicate letters, it returns -1', () => {
		expect(firstUniqueChar('anna')).toEqual(-1);
		expect(firstUniqueChar('ANNA')).toEqual(-1);
		expect(firstUniqueChar('latelate')).toEqual(-1);
	});
	test('given a string with one unique letter, it returns its index', () => {
		expect(firstUniqueChar('beett')).toEqual(0);
	});
});
