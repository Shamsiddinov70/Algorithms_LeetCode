/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    let patIndex = '';
    for (let i = 0; i < pattern.length; i++) {
        patIndex += pattern.indexOf(pattern[i])
    }

    let arr = [];
    for (const word of words) {
        let index = '';
        for (let i = 0; i < word.length; i++) {
            index += word.indexOf(word[i])
        }
        if (index === patIndex) {
            arr.push(word);
        }
    }
    return arr;
};