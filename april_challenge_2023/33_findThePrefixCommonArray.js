/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let n = A.length;
    let iterator = 1;

    let ans = [];

    while (iterator <= n) {
        let a = A.slice(0, iterator);
        let b = B.slice(0, iterator);
        let len = a.length;

        let counter = 0;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (a[i] === b[j]) counter++;
            }
        }

        ans.push(counter);
        iterator++;
    }
    return ans;
};