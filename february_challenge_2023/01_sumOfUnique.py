from collections import Counter


class Solution:
    def sumOfUnique(nums):
        dic = Counter(nums)
        ans = 0

        for key, val in dic.items():
            if val == 1:
                ans += int(key)

        return ans
