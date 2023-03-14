var findTheDistanceValue = function (arr1, arr2, d) {
    let arr = [];
    for (const a1 of arr1) {
        let temp = [];

        for (const a2 of arr2) {
            temp.push(Math.abs(a1 - a2) > d ? Math.abs(a1 - a2) : false)
        }
        arr.push(temp);
    }

    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(false)) {
            ans += 1;
        }
    }

    return ans;
};