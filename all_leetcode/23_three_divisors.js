var isThree = function (n) {
    let r = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            r += 1;
        }
    }

    return r === 3;
};