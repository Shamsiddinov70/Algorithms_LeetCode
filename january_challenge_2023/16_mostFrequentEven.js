/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let hash = {};

    for (const n of nums) {
        if (!hash[n]) hash[n] = 0;
        hash[n]++;
    }

    let res = [];
    for (const h in hash) {
        let key = Number(h);
        let value = hash[h];
        if (key % 2 === 0) {
            res.push([key, value]);
        }
    }

    if (res.length >= 1) {
        return res.sort((a, b) => b[1] - a[1])[0][0];
    }
    else {
        return -1;
    }
};