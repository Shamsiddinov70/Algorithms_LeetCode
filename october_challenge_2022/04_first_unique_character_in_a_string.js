var firstUniqChar = function (s) {
    let sortStr = s.split('').sort();

    let unique = [];

    for (let i = 0; i < sortStr.length; i++) {
        if (sortStr[i] !== sortStr[i + 1] &&
            sortStr[i] !== sortStr[i - 1])
            unique.push(sortStr[i]);
    }

    let res = [];
    for (let i = 0; i < s.length; i++) {
        if (unique.includes(s[i])) res.push(i);
    }

    return res[0] !== undefined ? res[0] : -1;
};