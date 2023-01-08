/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let arr = [...score].sort((a, b) => b - a);
    let first = arr[0];
    let second = arr[1];
    let third = arr[2];

    let ans = [];
    for (let i = 0; i < score.length; i++) {
        if (score[i] === first) {
            ans.push("Gold Medal");
            continue;
        }
        if (score[i] === second) {
            ans.push("Silver Medal");
            continue;
        }
        if (score[i] === third) {
            ans.push("Bronze Medal");
            continue;
        }
        else {
            ans.push(String(arr.indexOf(score[i]) + 1));
        }
    }
    return ans;
};

//[10,3,8,9,4]

//10 9 8 4 3

//10 gold 5 bronze