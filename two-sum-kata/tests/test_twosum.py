import pytest
import src.twosum as twosum


class TestTwoSum:
    def test_it_returns_empty_for_empty_list(self):
        assert(twosum.two_sum(nums=[], target=1) == [])

    def test_one_plus_one_is_two(self):
        assert(twosum.two_sum(nums=[1, 1], target=2) == [0, 1])

    def test_returns_empty_for_one_number_list(self):
        assert(twosum.two_sum(nums=[1], target=1) == [])

    def test_list_of_unique_positive_numbers(self):
        assert(twosum.two_sum(nums=[1, 2, 3, 4, 5], target=9) == [3, 4])

    def test_list_with_negative_nums(self):
        assert(twosum.two_sum(nums=[-1, 2, 4, -2], target=3) == [0, 2])
        assert(twosum.two_sum(nums=[-5, -4, -10, 11], target=-14) == [1, 2])
