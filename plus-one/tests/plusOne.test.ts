import { plusOne } from "../src/plus-one";

describe("the plusOne function", () => {
  it("throws an error when it is given an empty array", () => {
    expect(() => plusOne([])).toThrow();
  });

  it("returns the next number for any single-digit input", () => {
    expect(plusOne([0])).toEqual([1]);
    expect(plusOne([3])).toEqual([4]);
    expect(plusOne([8])).toEqual([9]);
  });

  it("succeeds when a new digit needs to be added to the array", () => {
    expect(plusOne([9])).toEqual([1, 0]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
    expect(plusOne([1, 9, 9, 9])).toEqual([2, 0, 0, 0]);
  });

  it("succeeds with arbitrary integers", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    expect(plusOne([1, 7, 8, 9, 9])).toEqual([1, 7, 9, 0, 0]);
  });
});
