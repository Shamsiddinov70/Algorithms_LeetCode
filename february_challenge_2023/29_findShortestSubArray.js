/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let hash = {};

    for (const n of nums) {
        if (!hash[n]) hash[n] = 0;
        hash[n]++;
    }

    let maxDegree = Math.max(...Object.values(hash));
    let degrees = [];
    for (const h in hash) {
        if (hash[h] === maxDegree) {
            degrees.push(h - 0);
        }
    }

    let ans = [];

    for (let i = 0; i < degrees.length; i++) {
        let firstIndex = nums.indexOf(degrees[i]);
        let lastIndex = nums.lastIndexOf(degrees[i]);

        let counter = 0;
        for (let j = firstIndex; j <= lastIndex; j++) {
            counter++;
        }
        ans.push(counter);
    }

    return Math.min(...ans);
};