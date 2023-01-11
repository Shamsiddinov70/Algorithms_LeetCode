/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let hash = {};
    let limit = nums.length / 2;

    for (const n of nums) {
        if (!hash[n]) hash[n] = 0;
        hash[n]++;
    }

    let res = 0;
    for (const h in hash) {
        let key = Number(h);
        let value = hash[h];
        if (value > limit) {
            res = key;
        }
    }
    return res;
};