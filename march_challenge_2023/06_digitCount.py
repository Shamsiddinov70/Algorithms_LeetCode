class Solution:
    def digitCount(self, num: str) -> bool:
        dic = Counter(num)
        count = 0

        for i in range(len(num)):
            for k, v in dic.items():
                if int(k) == i and v == int(num[i]) or num[i] == '0' and i > 0:
                    count += 1
                    break

        return count == len(num)
