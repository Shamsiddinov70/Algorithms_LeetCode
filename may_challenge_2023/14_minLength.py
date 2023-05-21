class Solution:
    def minLength(self, s: str) -> int:
        for i in range(len(s)):
            s = s.replace("AB", '')
            s = s.replace("CD", '')

        return len(s)
