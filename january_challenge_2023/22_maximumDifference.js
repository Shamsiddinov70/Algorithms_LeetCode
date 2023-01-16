/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let arr = [-1];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            arr.push(nums[j] - nums[i]);
        }
    }

    let max = Math.max(...arr);
    return max !== 0 ? max : -1;
};