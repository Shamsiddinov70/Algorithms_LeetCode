var truncateSentence = function (s, k) {
    return s.split(' ').splice(0, k).join(' ');
};

console.log(truncateSentence("hello how are you brother?", 4));