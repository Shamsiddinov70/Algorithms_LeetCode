import re


class Solution:
    def maximumValue(self, strs: List[str]) -> int:
        max_num = 0
        for s in strs:
            digit = ''.join(re.findall('[0-9]+', s))

            if len(digit) == len(s):
                max_num = max(max_num, int(digit))
            else:
                max_num = max(max_num, len(s))

        return max_num
