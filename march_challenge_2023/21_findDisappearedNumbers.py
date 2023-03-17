class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        nums_set = set(nums)
        return [i for i in range(1, len(nums)+1) if i not in nums_set]
