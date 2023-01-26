class Solution:
    def findFinalValue(self, nums, original: int) -> int:
        sort_arr = sorted(nums)
        ans = original

        for n in sort_arr:
            if n == original:
                original = 2*original
                ans = original

        return ans
