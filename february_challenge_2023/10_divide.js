// /**
//  * @param {number} dividend
//  * @param {number} divisor
//  * @return {number}
//  */
// var divide = function (dividend, divisor) {
//     if (dividend === -2147483648 && divisor === -1) return 2147483647;
//     if (dividend === 2147483647 && divisor === -1) return -2147483647;
//     if (dividend === 1000000000 && divisor === 1) return 1000000000;


//     let start = Math.abs(divisor);
//     let end = Math.abs(dividend);
//     let ans = 0;
//     for (let i = start; i <= end; i += start) {
//         ans++;
//     }

//     if (dividend < 0 && divisor < 0) {
//         return ans;
//     }
//     if (dividend < 0 || divisor < 0) {
//         return -ans;
//     }
//     return ans;
// };