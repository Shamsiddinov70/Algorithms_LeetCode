class Solution:
    from collections import Counter

    def repeatedNTimes(nums):
        leng = len(nums) / 2
        dic = Counter(nums)

        for key, value in dic.items():
            if value == leng:
                return int(key)
