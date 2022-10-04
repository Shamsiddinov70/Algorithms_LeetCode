var singleNumber = function (nums) {
    //firstly, array is sorted and array is changed from [1,2,1,3,2,5] to [1,1,2,2,3,5]
    let sortArr = nums.sort((a, b) => a - b);

    let res = []; // result array

    // checked: if sortArr[i] is not equal to sortArr[i + 1] : 1, 1 equal so first one true but after following second one is 2 so that should check && (and) sortArr[i] is not equal to sortArr[i - 1];

    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] !== sortArr[i + 1] && sortArr[i] !== sortArr[i - 1]) res.push(sortArr[i]);
    }

    return res;
};