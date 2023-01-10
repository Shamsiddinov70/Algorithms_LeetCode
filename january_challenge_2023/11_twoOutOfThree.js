/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let arr1 = [...new Set(nums1)];
    let arr2 = [...new Set(nums2)];
    let arr3 = [...new Set(nums3)];

    let needsArr = [...arr1, ...arr2, ...arr3];

    let hash = {};

    for (const n of needsArr) {
        if (!hash[n]) hash[n] = 0;
        hash[n]++;
    }

    let ans = [];
    for (const h in hash) {
        if (hash[h] >= 2) {
            ans.push(Number(h));
        }
    }
    return ans;
};