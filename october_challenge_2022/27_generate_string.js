var generateTheString = function (n) {
    let num;
    if (n % 2 === 0) num = n - 1;
    if (n % 2 !== 0) num = n - 2;

    let str = '';
    for (let i = 0; i < num; i++) {
        str += "a";
    }

    return str.length === (n - 1) ? (str + 'b') : (str + "cd");
}