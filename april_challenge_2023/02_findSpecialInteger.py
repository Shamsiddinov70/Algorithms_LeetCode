class Solution:
    def findSpecialInteger(self, nums: List[int]) -> int:
        count = Counter(nums)

        max_n = 0
        ans = 0
        for k, v in count.items():
            max_n = max(max_n, v)
            if max_n == v:
                ans = int(k)

        return ans
