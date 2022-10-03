var detectCapitalUse = function (word) {
    let uLetter = word.toUpperCase();
    let cLetter = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);


    if (word === uLetter || word === cLetter || word === word.toLowerCase())
        return true

    return false
};