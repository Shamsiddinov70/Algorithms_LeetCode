/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let digit = BigInt((digits.join(''))) + 1n;
    let arr = digit.toString().split('');
    let ans = [];
    for (const a of arr) {
        ans.push(parseInt(a));
    }
    return ans;
};