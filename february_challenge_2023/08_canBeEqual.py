class Solution:
    def canBeEqual(target, arr) -> bool:
        return sorted(target) == sorted(arr)
