from collections import Counter


class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        dic = Counter((s1+" "+s2).split())

        res = []
        for k, v in dic.items():
            if v == 1:
                res.append(k)

        return res
