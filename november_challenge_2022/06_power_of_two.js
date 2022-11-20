var isPowerOfTwo = function (n) {
    if (n === 0) return false;
    let logNum = Math.log2(n);
    let compareLogNum = Math.floor(logNum);
    return logNum === compareLogNum;
};

console.log(isPowerOfTwo(16));