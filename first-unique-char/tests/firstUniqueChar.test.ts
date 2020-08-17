import {firstUniqueChar} from '../src/firstUniqueChar';

describe('the firstUniqueChar function', () => {
	test('given an empty string, it returns -1', () => {
		expect(firstUniqueChar('')).toEqual(-1);
	});

	test('given a string with all duplicate chars, it returns -1', () => {
		expect(firstUniqueChar('anna')).toEqual(-1);
		expect(firstUniqueChar('ANNA')).toEqual(-1);
		expect(firstUniqueChar('latelate')).toEqual(-1);
	});

	test('given a string with one unique char, it returns its index', () => {
		expect(firstUniqueChar('hanna')).toEqual(0);
		expect(firstUniqueChar('HANNA')).toEqual(0);
		expect(firstUniqueChar('b')).toEqual(0);
	});

	test('given a string with several unique chars, it returns the first one', () => {
		expect(firstUniqueChar('Clark')).toEqual(0);
		expect(firstUniqueChar('tattle')).toEqual(1);
		expect(firstUniqueChar('Gandalf the Grey')).toEqual(2);
		expect(firstUniqueChar('loveleetcode')).toEqual(2);
	});

	test('given a string with capital and lowercase of the same letter, it treats them as different chars', () => {
		expect(firstUniqueChar('Anna')).toEqual(0);
		expect(firstUniqueChar('AnNA')).toEqual(1);
		expect(firstUniqueChar('annA')).toEqual(0);
		expect(firstUniqueChar('ANnA')).toEqual(1);
	});
});
