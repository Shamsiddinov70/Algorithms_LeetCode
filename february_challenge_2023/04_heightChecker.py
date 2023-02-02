def heightChecker(heights):
    sort_arr = sorted(heights)
    ans = 0

    for i in range(len(heights)):
        if heights[i] != sort_arr[i]:
            ans += 1

    return ans
