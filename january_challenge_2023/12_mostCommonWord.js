/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let arr = paragraph.toLowerCase().split(/\W+/g).filter((w) => w);

    let needsArr = [];
    for (const a of arr) {
        if (!banned.includes(a)) {
            needsArr.push(a);
        }
    }

    let hash = {};
    for (const n of needsArr) {
        if (!hash[n]) hash[n] = 0;
        hash[n]++;
    }

    let ans = Object.entries(hash).sort((a, b) => b[1] - a[1])[0][0];
    return ans;
};