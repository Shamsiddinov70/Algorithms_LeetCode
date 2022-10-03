var findPeakElement = function (nums) {
    let maxEl = Math.max(...nums);

    for (const key of nums) {
        if (key === maxEl) {
            return nums.indexOf(key);
        }
    }
};

/*
let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }

 return max

It is good way if array consists  thounds of items.
 */