/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (str) {
    let s = str.split(' ');
    let arr = [];
    let counter = 0;
    for (const n of s) {
        let num = Number(n)
        if (num) {
            counter++;
            let prev = arr[arr.length - 1];
            if (num > prev || prev == undefined) {
                arr.push(num);
            }
        }
    }
    return counter === arr.length;
};