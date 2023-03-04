class Solution:
    def canBeTypedWords(self, text: str, b: str) -> int:
        words = text.split(' ')
        ans = []
        for word in words:
            for i in range(len(b)):
                if b[i] in word:
                    ans.append(word)
                    break

        return len(words) - len(ans)
