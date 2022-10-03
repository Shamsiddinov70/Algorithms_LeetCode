var findMedianSortedArrays = function(nums1, nums2) {

  let sortedArr = [...nums1, ...nums2].sort((a, b) => a - b);

  if (sortedArr.length === 1) {
    return sortedArr;
  }

  if (sortedArr.length % 2 !== 0) {
    let devidedOddArr = Math.floor(sortedArr.length / 2);

    sortedArr.splice(0, devidedOddArr);
    sortedArr.splice(-devidedOddArr);

    return sortedArr;
  }

  else {
    let devidedEvenArr = sortedArr.length / 2;

    let firstMiddle = sortedArr.splice(devidedEvenArr - 1, 1);
    let secondMiddle = sortedArr.splice(-devidedEvenArr, 1);

    let result = Number(firstMiddle[0] + secondMiddle[0]) / 2;
    return result;
  }
};