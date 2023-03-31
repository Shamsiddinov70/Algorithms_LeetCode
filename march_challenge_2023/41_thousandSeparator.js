/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    let s = String(n);
    let len = s.length;

    let ans = "";
    if (len % 3 === 0) {
        let dot = 1;
        for (let i = 0; i < len; i++, dot++) {
            ans += s[i];
            if (dot == 3 && i < len - 1) {
                ans += '.';
                dot = 0;
            }
        }
    }

    else {
        let dot = 1;
        for (let j = len - 1; j >= 0; j--, dot++) {
            ans += s[j];
            if (dot == 3) {
                ans += '.';
                dot = 0;
            }
        }
    }

    if (len % 3 === 0) return ans;
    return ans.split('').reverse().join('');
};