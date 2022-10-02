var isPalindrome = function (x) {
    return x.toString().split('').reverse().join('') - 0 === x;
};