function modifyMultiply(s, loc, num) {
    let str = s.split(' ');
    let word = '';

    for (let i = 0; i < str.length; i++) {
        if (i === loc) word += str[i];
    }

    let words = '';
    let i = 0;

    while (i < num) {
        words += word + "-";
        i++;
    }

    return words.slice(0, words.length - 1);
}