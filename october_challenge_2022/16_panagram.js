var checkIfPangram = function (sentence) {
    let unique = [];

    for (let i = 0; i < sentence.length; i++) {
        if (!unique.includes(sentence[i])) unique.push(sentence[i])
    }

    return unique.length >= 26;
};