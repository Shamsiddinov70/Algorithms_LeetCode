/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    let arr = nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        while (arr.length !== 0) {
            ans.push(arr.shift() + arr.pop());
        }
    }
    return Math.max(...ans);
};
