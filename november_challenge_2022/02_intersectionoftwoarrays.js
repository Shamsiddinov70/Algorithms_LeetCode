var intersection = function (nums1, nums2) {
    let arr = [];
    for (let n of nums1) {
        if (nums2.includes(n)) {
            arr.push(n);
        }
    }
    return Array.from(new Set(arr));
};