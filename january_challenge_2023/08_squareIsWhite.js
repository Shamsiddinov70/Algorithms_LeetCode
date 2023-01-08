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