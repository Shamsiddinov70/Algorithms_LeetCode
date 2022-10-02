//1-solution
var lengthOfLastWord = function (s) {
    let first = s.trim()
    let second = first.split(' ').splice(-1).join(' ');
    return second.length;
};


// 2-solution
var lengthOfLastWord = function (s) {
    return s.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord("hello world"));