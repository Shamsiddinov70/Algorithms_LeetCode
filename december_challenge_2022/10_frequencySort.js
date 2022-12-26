var frequencySort = function (nums) {
    let hash = {};

    for (const n of nums) {
        if (!hash[n]) hash[n] = 0;
        hash[n]++;
    }

    let arr = Object.entries(hash).sort((a, b) => a[1] - b[1] || b[0] - a[0]);

    let resArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][1]; j++) {
            resArr.push(Number(arr[i][0]));
        }
    }

    return resArr;
};