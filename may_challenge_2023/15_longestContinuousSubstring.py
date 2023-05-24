class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        alpha = "abcdefghijklmnopqrstuvwxyz"
        prev_index = -2
        ans = 0
        counter = 0

        for i in range(len(s)):
            idx = alpha.index(s[i])
            if idx - prev_index == 1:
                counter += 1
            else:
                counter = 0

            prev_index = idx
            ans = max(ans, counter)

        return ans + 1
