class Solution:
    def reverse(self, x: int) -> int:
        is_negative = x < 0
        x = abs(x)
        reverse_num = 0

        while x != 0:
            reverse_num *= 10
            digit = x % 10
            reverse_num += digit
            x //= 10

        if reverse_num > 2 ** 31:
            return 0

        if is_negative:
            return -reverse_num
        else:
            return reverse_num
