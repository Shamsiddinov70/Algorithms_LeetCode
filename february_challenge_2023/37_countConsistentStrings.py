class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
        ans = 0
        for word in words:
            word = ''.join(list(set(word)))

            count = 0
            for i in range(len(allowed)):
                for j in range(len(word)):
                    if allowed[i] == word[j]:
                        count += 1

            if len(word) == count:
                ans += 1

        return ans
