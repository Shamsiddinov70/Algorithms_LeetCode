class Solution:
    def findLucky(self, arr: List[int]) -> int:
        arr = sorted(arr)
        count = Counter(arr)
        ans = -1
        for k, v in count.items():
            if int(k) == v:
                ans = v

        return ans
