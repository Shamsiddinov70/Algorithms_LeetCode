var isMonotonic = function (nums) {
    let sortArr = [...nums].sort((a, b) => a - b);
    let str1 = sortArr.toString().split(',').join('');
    let revArr = [...sortArr].reverse();
    let str2 = revArr.toString().split(',').join('');

    let ans = nums.toString().split(',').join('');
    return ans === str1 || ans === str2;
};