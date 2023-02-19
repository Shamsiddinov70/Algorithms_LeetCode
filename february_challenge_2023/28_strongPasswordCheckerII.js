/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    //1-step
    let leng = false;
    if (password.length >= 8) {
        leng = true;
    }

    //2-step
    let regexFull = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/gm;
    let lowerUpperDigitSymbol = password.match(regexFull) !== null;

    //3-step
    let twoRepeatingChars;
    let arr = [];
    let counter = 0;
    for (let i = 0; i < password.length; i++) {
        let prev = arr[arr.length - 1];
        let index = password.indexOf(password[i])
        arr.push(index);
        if (index === prev || prev === undefined) {
            counter++;
        }
    }

    twoRepeatingChars = counter < 2;

    //result
    if (leng && lowerUpperDigitSymbol && twoRepeatingChars) {
        return true;
    }
    return false;
};