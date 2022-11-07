var maximum69Number = function (num) {
    let arr = num.toString().split('');

    return arr.join('').replace('6', '9');
};