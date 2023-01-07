/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    let len = nums.length;
    let hash = {};
    for (let i = 0; i < len; i++) {
        let num = nums[i];
        for (const n of num) {
            if (!hash[n]) hash[n] = 0;
            hash[n]++;
        }
    }

    let arr = Object.entries(hash);

    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === len) {
            ans.push(Number(arr[i][0]))
        }
    }

    return ans;
};