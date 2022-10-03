var runningSum = function (nums) {
    let res = [];
    let prev = 0;

    for (let i = 0; i < nums.length; i++) {
        res.push(prev += nums[i])
    }

    return res;
};