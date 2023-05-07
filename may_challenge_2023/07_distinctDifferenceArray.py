class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        ans = []

        for i in range(len(nums)):
            prefix = nums[0:i+1]
            suffix = None

            if i < len(nums)-1:
                suffix = nums[i+1:]

            p = len(set(prefix))
            s = len(set(suffix)) if suffix else 0

            ans.append(p - s)

        return ans
