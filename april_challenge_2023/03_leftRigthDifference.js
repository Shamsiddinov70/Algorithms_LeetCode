/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
    let l = [0];
    let r = [];
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        count1 += nums[i];
        l.push(count1);
    }
    for (let j = nums.length; j > 0; j--) {
        if (nums[j]) count2 += nums[j];
        r.unshift(count2);
    }

    let ans = [];

    for (let i = 0; i < l.length; i++) {
        ans.push(Math.abs(l[i] - r[i]));
    }
    return ans;
};