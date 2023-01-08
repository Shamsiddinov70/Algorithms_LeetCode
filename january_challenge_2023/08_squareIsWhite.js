/**
 * @param {string} coordinates
 * @return {boolean}
 */

var squareIsWhite = function (coordinates) {
    let letter = coordinates[0];
    let num = coordinates[1] - 0;

    if (letter === 'a' || letter === 'c' || letter === 'e' || letter === 'g') {
        if (num % 2 === 0) return true;
        return false;
    }

    if (letter === 'b' || letter === 'd' || letter === 'f' || letter === 'h') {
        if (num % 2 !== 0) return true;
        return false;
    }
};


/////////////////////////////
// second way
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let letter = coordinates[0];
    let num = coordinates[1] - 0;

    let letters = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
    }

    let bool = false;

    for (const l in letters) {
        let letterIndex = letters[l];
        if (num % 2 === 0 && l === letter && letterIndex % 2 !== 0) bool = true;
        if (num % 2 !== 0 && l === letter && letterIndex % 2 === 0) bool = true;
    }

    return bool;
};