var diStringMatch = function (s) {
    let low = 0, high = s.length;
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') {
            ans.push(low);
            low++;
        }
        if (s[i] === 'D') {
            ans.push(high);
            high--;
        }
    }

    return ans.concat(low);
};