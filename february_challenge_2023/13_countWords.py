from collections import Counter


class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        dic1 = Counter(words1)
        dic2 = Counter(words2)

        ans = 0

        for k, v in dic1.items():
            for k2, v2 in dic2.items():
                if k == k2 and v == 1 and v2 == 1:
                    ans += 1

        return ans
