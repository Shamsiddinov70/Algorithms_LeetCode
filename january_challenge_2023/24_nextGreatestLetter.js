/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let ans = "";
    for (let i = 0; i < letters.length; i++) {
        if (alpha.indexOf(letters[i]) > alpha.indexOf(target)) {
            ans += letters[i];
        }
    }
    return ans.length >= 1 ? ans[0] : letters[0];
};