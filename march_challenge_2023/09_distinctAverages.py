class Solution:
    def distinctAverages(self, nums: List[int]) -> int:
        nums = sorted(nums)
        ans_set = set()
        while len(nums) != 0:
            min_num = nums[0:1]
            max_num = nums.pop()
            nums.remove(min_num[0])
            ans_set.add((min_num[0] + max_num) / 2)

        return len(ans_set)
