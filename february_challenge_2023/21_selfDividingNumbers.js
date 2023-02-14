/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let ans = [];

    for (let i = left; i <= right; i++) {
        let strNum = String(i);
        let counter = 0;
        if (!strNum.includes('0')) {
            for (let j = 0; j < strNum.length; j++) {
                if (i % Number(strNum[j]) === 0) {
                    counter++;
                }
            }
        }
        if (counter === strNum.length) {
            ans.push(i);
        }
    }

    return ans;
};