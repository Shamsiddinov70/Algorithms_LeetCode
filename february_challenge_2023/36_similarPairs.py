class Solution:
    def similarPairs(self, words: List[str]) -> int:
        result_list = []
        for word in words:
            unique_str = set(word)
            sort_str = ''.join(sorted(unique_str))
            ans = ''.join([*sort_str])
            result_list.append(ans)

        count = 0
        for i in range(len(result_list)):
            for j in range(i+1, len(result_list)):
                if result_list[i] == result_list[j]:
                    count += 1

        return count
