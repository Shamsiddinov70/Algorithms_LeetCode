/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  let even = [];
  let odd = [];
  nums.forEach((n, i) => {
    i % 2 === 0 ? even.push(n) : odd.push(n);
  });

  even.sort((a, b) => a - b);
  odd.sort((a, b) => b - a);

  let ans = [];
  for (let i = 0; i < even.length; i++) {
    ans.push(even[i]);
    ans.push(odd[i]);
  }

  return nums.length % 2 === 0 ? ans : ans.splice(0, ans.length - 1);
};
