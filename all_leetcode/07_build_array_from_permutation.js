// solution 1
let result = [];

for (let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
}

return result;

// solution 2
let resultArr = [];

nums.forEach((_, index, elements) => {
    resultArr.push(elements[elements[index]])
});

return resultArr;