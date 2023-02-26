class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        arr = [*list(set(nums1)), *list(set(nums2))]
        dic = Counter(arr)

        a = []
        b = []
        for k, v in dic.items():
            if v == 1 and int(k) in nums1:
                a.append(int(k))
            if v == 1 and int(k) in nums2:
                b.append(int(k))

        return [a, b]
