/**
 * @param {number[]}
 * @return {number}
 */
var findMaxK = function (n) {
  let nums = [...new Set(n)];
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let n1 = Math.abs(nums[i]);
      let n2 = Math.abs(nums[j]);

      if (n1 === n2) {
        arr.push(nums[i] > nums[j] ? nums[i] : nums[j]);
      }
    }
  }

  let max = Math.max(...arr);

  if (arr.length > 0 && max > 0) {
    return max;
  } else {
    return -1;
  }
};
