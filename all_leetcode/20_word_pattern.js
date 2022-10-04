var wordPattern = function (pattern, s) {
    let p = pattern.split('');
    let str = s.split(' ');

    let r1 = ''
    for (let i = 0; i < p.length; i++) {
        r1 += p.indexOf(p[i]);
    }

    let r2 = ''
    for (let i = 0; i < str.length; i++) {
        r2 += str.indexOf(str[i]);
    }

    return r1 === r2;
};