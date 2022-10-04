var reverseWords = function (s) {
    let str = s.split(' ');

    let ans = [];

    for (const w of str) {
        let word = w.split('').reverse().join('');
        ans.push(word);
    }

    return ans.join(' ');
};