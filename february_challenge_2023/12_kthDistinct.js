/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let hash = {};

    for (let a of arr) {
        if (!hash[a]) hash[a] = 0;
        hash[a]++
    }

    let res = [];

    for (let h in hash) {
        if (hash[h] == 1) {
            res.push(h);
        }
    }

    return res[k - 1] ? res[k - 1] : "";
};