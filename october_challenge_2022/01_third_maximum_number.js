var thirdMax = function (nums) {
    let uniqueArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (!uniqueArr.includes(nums[i])) uniqueArr.push(nums[i]);
    }

    if (uniqueArr.length < 3) return Math.max(...uniqueArr);

    return uniqueArr.sort((a, b) => a - b).reverse()[2];
};