class Solution:
    def sumZero(n):
        num = n//2
        ans = []

        for i in range(1, num+1):
            ans.append(i)
            ans.append(-i)

        if n % 2 == 0:
            return ans
        ans.append(0)
        return ans
