/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);
    nums2.splice(n);

    for (const n2 of nums2) {
        nums1.push(n2);
    }
    nums1.sort((a, b) => a - b);
};