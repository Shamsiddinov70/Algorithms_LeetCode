var mostWordsFound = function (sentences) {
    let arrNum = [];

    for (let i = 0; i < sentences.length; i++) {
        arrNum.push(sentences[i].split(' ').length);
    }

    return arrNum.reduce((a, b) => a > b ? a : b);
};