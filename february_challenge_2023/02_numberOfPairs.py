from collections import Counter


class Solution:
    def numberOfPairs(nums):
        dic = Counter(nums)
        pairs = 0
        remain = 0

        for v in dic.values():
            pairs += v // 2

            if v == 1 or v > 2 and v % 2 != 0:
                remain += 1

        return [pairs, remain]
