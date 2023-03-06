class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        n = arr[-1] + k
        miss_nums = []
        i = 1
        while i <= n:
            if i not in arr:
                miss_nums.append(i)
            i += 1

        return miss_nums[k-1]
