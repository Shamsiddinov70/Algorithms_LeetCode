from collections import Counter


class Solution:
    def divideArray(nums) -> bool:
        dic = Counter(nums)
        pairs_count = len(nums) / 2
        counter = 0
        for val in dic.values():
            counter += val // 2

        return counter == pairs_count
