class Solution:
    def greatestLetter(self, s: str) -> str:
        alpha = "abcdefghijklmnopqrstuvwxyz"
        max_index = 0
        mi = None
        for i in s:
            if i.lower() in s and i.upper() in s:
                temp = alpha.index(i.lower())
                max_index = max(max_index, temp)
                mi = max_index

        if mi != None:
            return alpha[max_index].upper()
        return ''
