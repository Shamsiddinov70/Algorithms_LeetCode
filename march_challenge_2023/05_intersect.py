class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dic1 = Counter(nums1)
        dic2 = Counter(nums2)

        ans = []
        for k, v in dic1.items():
            for k2, v2 in dic2.items():
                if k == k2 and v < v2:
                    for i in range(v):
                        ans.append(k)
                if k == k2 and v > v2:
                    for i in range(v2):
                        ans.append(k)
                if k == k2 and v == v2:
                    for i in range(v):
                        ans.append(k)

        return ans
