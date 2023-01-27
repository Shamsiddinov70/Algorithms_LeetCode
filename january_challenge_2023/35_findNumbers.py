class Solution:
    def findNumbers(self, nums) -> int:
        ans = 0

        for num in nums:
            if (num > 9 and num < 100 or num > 999 and num < 10_000 or num == 100_000):
                ans += 1

        return ans
