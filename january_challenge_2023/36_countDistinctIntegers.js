/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let arr = [...nums];
    for (let i = 0; i < arr.length; i++) {
        let num = '';
        while (arr[i] !== 0) {
            num += arr[i] % 10;
            arr[i] = Math.floor(arr[i] / 10);
        }
        nums.push(Number(num));
    }
    return new Set(nums).size;
};