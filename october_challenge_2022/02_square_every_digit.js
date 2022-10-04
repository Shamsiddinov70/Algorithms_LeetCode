function squareDigits(num) {
    let arr = num.toString().split('');

    let r = '';
    for (let n of arr) r += (Number(Math.pow(n, 2)));
    return r - 0;
}