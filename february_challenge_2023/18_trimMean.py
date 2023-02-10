class Solution:
    def trimMean(self, arr: List[int]) -> float:
        arr.sort()
        leng_arr = len(arr)
        one_percent = leng_arr / 100
        five_percent = int(one_percent * 5)

        ans_arr = arr[five_percent:][:-five_percent]

        return sum(ans_arr) / len(ans_arr)
