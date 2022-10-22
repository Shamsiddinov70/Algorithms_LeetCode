var mergeAlternately = function (word1, word2) {
    let n;
    word1.length > word2.length ? n = word1.length : n = word2.length;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(word1[i]);
        result.push(word2[i]);
    }

    return result.filter((e) => e).join('');
};