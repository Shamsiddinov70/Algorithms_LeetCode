var countOperations = function (num1, num2) {
    if (num1 === 0 || num2 === 0) return 0;
    let arr = []
    while (num1 !== 0) {
        if (num1 >= num2) arr.push(num1 = num1 - num2);
        if (num2 > num1) arr.push(num2 = num2 - num1);
    }

    return arr.indexOf(0) + 1;
};