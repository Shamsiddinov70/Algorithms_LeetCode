var sumOfThree = function (num) {
    if (num % 3 === 0) {
        let devidedThree = num / 3 - 1;
        let second = num - (devidedThree * 2) - 1;
        let third = num - (devidedThree + second);

        return [devidedThree, third, second]
    }

    return [];
};