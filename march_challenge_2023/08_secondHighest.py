from collections import Counter
import re


class Solution:
    def secondHighest(self, s: str) -> int:
        numbers = ''.join(re.findall('[0-9]+', s))
        if len(numbers) < 1:
            return -1
        if len(Counter(numbers)) == 1:
            return -1

        arr = sorted(list(set(numbers)))
        if len(arr) >= 2:
            return int(arr[-2])
        else:
            return int(arr[0])
