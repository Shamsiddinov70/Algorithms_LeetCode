var findTheArrayConcVal = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        while (nums.length !== 0) {
            arr.push([nums.shift(), nums.pop()]);
        }
    }

    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i].join('') - 0;
    }
    return ans;
};