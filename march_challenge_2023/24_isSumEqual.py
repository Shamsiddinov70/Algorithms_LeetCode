class Solution:
    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
        alpha = "abcdefghij"
        first, second, target = 0, 0, 0
        for i in range(len(firstWord)):
            index = alpha.index(firstWord[i])
            first *= 10
            first += index
        for i in range(len(secondWord)):
            index = alpha.index(secondWord[i])
            second *= 10
            second += index
        for i in range(len(targetWord)):
            index = alpha.index(targetWord[i])
            target *= 10
            target += index

        return first + second == target
