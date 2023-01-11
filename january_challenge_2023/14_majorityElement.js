/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let hash = {};
    let limit = nums.length / 3;

    for (const n of nums) {
        if (!hash[n]) hash[n] = 0;
        hash[n]++;
    }

    let res = [];
    for (const h in hash) {
        let key = Number(h);
        let value = hash[h];
        if (value > limit) {
            res.push(key);
        }
    }
    return res;
};