class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        dic = Counter(nums)
        ans = 0

        for k, v in dic.items():
            if v == 1:
                ans = int(k)

        return ans
