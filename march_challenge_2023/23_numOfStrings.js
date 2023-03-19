var numOfStrings = function (patterns, word) {
    let ans = 0;
    for (const pattern of patterns) {
        let repl = word.replace(pattern, '');
        let len = word.length - pattern.length;
        if (repl.length === len) ans++;
    }
    return ans;
};