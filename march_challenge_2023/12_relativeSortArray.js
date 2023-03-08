/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  arr1.sort((a, b) => a - b);
  let hash = {};

  for (const a of arr1) {
    if (!hash[a]) hash[a] = 0;
    hash[a]++;
  }

  let ans = [];
  for (const key in hash) {
    for (let i = 0; i < arr2.length; i++) {
      if (Number(key) === arr2[i]) {
        let j = 0;
        while (j < hash[key]) {
          ans.push([Number(key), i]);
          j++;
        }
      }
    }
  }

  ans = ans.sort((a, b) => a[1] - b[1]).map((n) => n[0]);
  for (const key in hash) {
    if (!ans.includes(Number(key))) {
      let j = 0;
      while (j < hash[key]) {
        ans.push(Number(key));
        j++;
      }
    }
  }

  return ans;
};
