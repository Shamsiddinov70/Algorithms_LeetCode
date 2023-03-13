var replaceDigits = function (s) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";

    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) ans += s[i];
        ans += alpha[alpha.indexOf(s[i]) + Number(s[i + 1])];
    }
    return ans.replaceAll(undefined, '');
};