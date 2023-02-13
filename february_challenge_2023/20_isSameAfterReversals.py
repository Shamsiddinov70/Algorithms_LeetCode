class Solution:
    def isSameAfterReversals(self, n: int) -> bool:
        # reversed1
        reversed1 = 0
        num = n

        while num != 0:
            digit = num % 10
            reversed1 *= 10
            reversed1 += digit
            num //= 10

        # reversed2
        reversed2 = 0

        while reversed1 != 0:
            digit = reversed1 % 10
            reversed2 *= 10
            reversed2 += digit
            reversed1 //= 10

        return reversed2 == n
