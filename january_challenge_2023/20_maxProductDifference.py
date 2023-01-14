class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        nums.sort()
        start = nums[0] * nums[1]
        last = nums[-1] * nums[-2]
        return last - start
