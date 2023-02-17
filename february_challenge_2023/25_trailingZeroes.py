class Solution:
    def trailingZeroes(self, n: int) -> int:
        if n == 1 or n == 0:
            return 0

        fact = 1
        for i in range(1, n+1, 1):
            fact = fact*i

        ans = 0
        while fact != 0:
            digit = fact % 10
            if digit == 0:
                ans += 1
            else:
                break
            fact //= 10

        return ans
