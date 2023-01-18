var nextGreatestLetter = function (letters, target) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < letters.length; i++) {
        if (alpha.indexOf(letters[i]) > alpha.indexOf(target)) {
            return letters[i];
        }
    }

    return letters[0];
};