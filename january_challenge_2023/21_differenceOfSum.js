/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let elSum = 0;
    for (let n of nums) {
        elSum += n;
    }

    let digitSum = 0;
    for (let n of nums) {
        while (n !== 0) {
            digitSum += n % 10;
            n = Math.floor(n / 10);
        }
        digitSum += n;
    }
    return elSum - digitSum;
};