var frequencySort = function (s) {
    let hash = {}

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) hash[s[i]] = 0;
        hash[s[i]]++
    }

    let arr = Object.entries(hash).sort((a, b) => b[1] - a[1]);

    let ans = '';
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        while (j < arr[i][1]) {
            ans += arr[i][0];
            j++;
        }
    }
    return ans;
};