class Solution:
    def isFascinating(self, n: int) -> bool:
        if n % 10 == 0:
            return False

        power_two, power_three = n * 2, n * 3
        num = str(n)+str(power_two)+str(power_three)

        if len(set(num)) != len(num) or '0' in num:
            return False
        return True
