class Solution:
    def reformatNumber(self, number: str) -> str:
        numbers = number.translate({ord('-'): '', ord(' '): ''})

        ans = []

        for num in numbers:
            leng = len(numbers)
            if leng > 4 or leng == 3:
                ans.append(numbers[0:3])
                numbers = numbers[3:]
            else:
                ans.append(numbers[0:2])
                numbers = numbers[2:]

        return '-'.join([num for num in ans if num != ''])
