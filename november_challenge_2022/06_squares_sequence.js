function squares(x, n) {
    if (n <= 0) return [];

    let ans = [x];
    let i = 1;
    while (i < n) {
        ans.push(x *= x);
        i++;
    }
    return ans;
}