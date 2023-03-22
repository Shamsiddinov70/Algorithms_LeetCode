/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let words = sentence.split(' ');
    if (sentence[0] !== sentence[sentence.length - 1])
        return false;

    let ans = [];

    for (let i = 0; i < words.length; i++) {
        let lastChar = words[i][words[i].length - 1];
        for (let j = i + 1; j < words.length; j++) {
            let firstChar = words[j][0];
            if (lastChar === firstChar) {
                ans.push(true);
            }
            else {
                ans.push(false);
            }
            break
        }
    }

    return ans.find((f) => f === false) === false ? false : true;
};