var findPeakElement = function (nums) {
    let maxEl = Math.max(...nums);

    for (const key of nums) {
        if (key === maxEl) {
            return nums.indexOf(key);
        }
    }
};