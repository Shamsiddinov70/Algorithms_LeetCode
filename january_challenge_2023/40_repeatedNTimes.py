class Solution:

    def repeatedNTimes(nums):
        from collections import Counter

        leng = len(nums) / 2
        dic = Counter(nums)

        for key, value in dic.items():
            if value == leng:
                return int(key)
