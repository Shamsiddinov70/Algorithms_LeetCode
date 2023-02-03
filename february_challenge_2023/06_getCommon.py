from collections import Counter


class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        two_arr = [*set(nums1), *set(nums2)]

        dic = Counter(two_arr)
        ans = []
        for k, v in dic.items():
            if v > 1:
                ans.append(int(k))
        if ans:
            return min(ans)
        return -1
