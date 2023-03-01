var checkString = function (s) {
    return !s.includes('ba');
};

////
var checkString = function (s) {
    if (s.length === 1) return true;
    if (s.includes('a') && s.includes('b')) {
        return s.lastIndexOf('a') < s.indexOf('b');
    }
    else {
        return true;
    }
};