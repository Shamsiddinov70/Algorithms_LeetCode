/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    const n = num;
    let count = 0;
    while (num !== 0) {
        let modul = num % 10;
        num = Math.floor(num / 10);
        if (n % modul === 0) {
            count += 1;
        }
    }
    return count;
};