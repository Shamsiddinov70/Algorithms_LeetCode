class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        N = len(num)
        trailing = 0
        count = 0

        for n in num[::-1]:
            if count == 0 and n == '0':
                trailing += 1
            else:
                count += 1

        return num[0:N-trailing]


# second
class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        return num.rstrip('0')
