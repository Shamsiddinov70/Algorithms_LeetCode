# SOLUTION 2
class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        result = []

        for i in range(len(s)):
            sliced_str = s[:k]

            if sliced_str and len(sliced_str) == k:
                result.append(sliced_str)
            if sliced_str and len(sliced_str) < k:
                result.append(sliced_str.ljust(k, fill))

            s = s[k:]

        return result


# SOLUTION 1 without ljust method
class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        result = []

        for i in range(len(s)):
            sliced_str = s[:k]

            if sliced_str and len(sliced_str) == k:
                result.append(sliced_str)
            if sliced_str and len(sliced_str) < k:
                x = k - len(sliced_str)
                for i in range(x):
                    sliced_str += fill
                result.append(sliced_str)

            s = s[k:]

        return result
