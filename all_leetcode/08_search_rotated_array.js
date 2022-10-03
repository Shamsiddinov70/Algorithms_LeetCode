var search = function (nums, target) {
    let result = 0;

    nums.forEach((value, index) => {
        if (value === target) {
            result = index;
        }
        else {
            result = nums.indexOf(target);
        }
    });

    return result;
};