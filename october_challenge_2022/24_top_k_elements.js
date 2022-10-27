var topKFrequent = function (nums, k) {
    let hash = {}

    for (let num of nums) {
        if (!hash[num]) hash[num] = 0
        hash[num]++
    }

    let resArr = Object.entries(hash).sort((a, b) => b[1] - a[1]).map((e) => Number(e[0]));

    return resArr.splice(0, k);
};