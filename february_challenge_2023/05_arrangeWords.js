/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    let words = text.split(' ');
    let arr = [];
    for (const word of words) {
        let len = word.length;
        arr.push([len, word.toLowerCase()]);
    }

    let str = arr.sort((a, b) => a[0] - b[0]).map((a) => a[1]).join(' ');

    return str[0].toUpperCase().concat(str.slice(1));
};