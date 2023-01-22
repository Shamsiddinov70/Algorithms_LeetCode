class Solution(object):
    def alternateDigitSum(self, n):
        arr = []
        while n != 0:
            arr.append(n % 10)
            n //= 10
        arr.reverse()

        result = 0
        for i in range(len(arr)):
            if i % 2 == 0:
                result += arr[i]
            else:
                result -= arr[i]

        return result
