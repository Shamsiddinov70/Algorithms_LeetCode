class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        words = sorted(words)
        dic = Counter(words)
        arr = sorted(dic.items(), key=lambda item: item[1], reverse=True)[0:k]
        ans = []
        for i in range(len(arr)):
            ans.append(arr[i][0])
        return ans
