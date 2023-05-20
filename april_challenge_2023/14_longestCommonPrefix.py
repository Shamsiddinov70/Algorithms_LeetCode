class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        first = strs[0]
        n = 0
        l = 1

        for i in range(len(first)):
            s = first[0:l]
            l += 1

            count = 0
            for j in range(len(strs)):
                if strs[j].startswith(s):
                    count += 1

            if count == len(strs):
                n += 1

        return first[0:n]
