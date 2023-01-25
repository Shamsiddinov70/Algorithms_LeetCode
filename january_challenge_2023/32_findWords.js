/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const firstRow = 'qwertyuiop';
    const secondRow = 'asdfghjkl';
    const thirdRow = 'zxcvbnm';

    let res = [];
    for (const word of words) {
        let arr = [...new Set(word.toLowerCase())];

        let first = 0;
        let second = 0;
        let third = 0;

        for (let i = 0; i < arr.length; i++) {
            if (firstRow.includes(arr[i]))
                first++;
            if (secondRow.includes(arr[i]))
                second++;
            if (thirdRow.includes(arr[i]))
                third++;
        }

        let len = arr.length;

        if (len === first || len === second || len === third) {
            res.push(word);
        }
    }

    return res;
};