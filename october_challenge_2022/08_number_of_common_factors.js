var commonFactors = function (a, b) {
    let c = 0;

    for (let i = 0; i <= a; i++) {
        if (a % i === 0 && b % i === 0) c++;
    }

    return c;
};