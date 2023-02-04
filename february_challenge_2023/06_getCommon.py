from collections import Counter


class Solution:
    def getCommon(nums1, nums2) -> int:
        two_arr = [*set(nums1), *set(nums2)]

        dic = Counter(two_arr)
        ans = []
        for k, v in dic.items():
            if v > 1:
                ans.append(int(k))
        if ans:
            return min(ans)
        return -1
