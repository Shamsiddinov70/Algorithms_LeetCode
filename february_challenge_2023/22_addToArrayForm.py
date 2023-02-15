class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        last = num[-1]
        summ = 0

        for i in range(len(num)-1):
            summ += num[i]
            summ *= 10

        resDigit = summ + k if last == 0 else (summ + last) + k
        ans = []

        while resDigit != 0:
            digit = resDigit % 10
            ans.insert(0, digit)
            resDigit //= 10

        return ans
