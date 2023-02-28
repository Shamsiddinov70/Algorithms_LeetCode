class Solution:
    def balancedStringSplit(self, s: str) -> int:
        counter = 0
        ans = 0

        for i in range(len(s)):
            if s[i] == "R":
                counter += 1
            if s[i] == "L":
                counter -= 1

            if counter == 0:
                ans += 1

        return ans
