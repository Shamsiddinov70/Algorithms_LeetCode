/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(str) {
    let hash = {};

    for (const s of str) {
        if (!hash[s]) hash[s] = 0;
        hash[s]++;
    }

    return new Set(Object.values(hash)).size === 1;
};