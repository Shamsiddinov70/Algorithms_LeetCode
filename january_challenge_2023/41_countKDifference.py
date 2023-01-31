class Solution:
    def countKDifference(nums, k):
        count = 0

        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                n = abs(nums[i] - nums[j])
                if n == k:
                    count += 1

        return count
