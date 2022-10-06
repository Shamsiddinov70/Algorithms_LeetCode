var pivotArray = function (nums, pivot) {
    [left, middle, right] = [[], [], []];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) left.push(nums[i]);
        if (nums[i] === pivot) middle.push(nums[i]);
        if (nums[i] > pivot) right.push(nums[i]);
    }

    return [...left, ...middle, ...right];
};