var findDuplicates = function (nums) {
    let sortArr = nums.sort((a, b) => a - b);

    let res = [];

    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] === sortArr[i + 1]) res.push(sortArr[i]);
    }

    return res;
};