var separateDigits = function (nums) {
    let arr = [];
    for (var num of nums) {
        let temp = [];
        while (num != 0) {
            let digit = num % 10;
            temp.unshift(digit)
            num = Math.floor(num / 10);
        }
        arr.push(temp);
    }
    return arr.flat();
};