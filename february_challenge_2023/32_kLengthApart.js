/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let ans = [];
    let ones = 0;
    for (let i = 0; i < nums.length; i++) {
        let prev = ans[ans.length - 1];
        if (nums[i] === 1) {
            ones++;

            if ((i - prev) > k || prev === undefined) {
                ans.push(i);
            }
        }
    }
    return ans.length === ones;
};