class Solution:
    def checkIfExist(self, arr) -> bool:
        ans = False

        for i in range(len(arr)):
            for j in range(i+1, len(arr)):
                if arr[i] == 2 * arr[j] or arr[j] == 2 * arr[i]:
                    ans = True

        return ans
