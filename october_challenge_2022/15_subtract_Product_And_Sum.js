var subtractProductAndSum = function (n) {
    let s = n.toString();
    let r1 = 1, r2 = 0;

    for (let i = 0; i < s.length; i++) {
        r1 *= s[i] - 0;
        r2 += s[i] - 0;
    }

    return r1 - r2;
};
