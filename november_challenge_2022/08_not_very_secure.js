function alphanumeric(string) {
    if (string.length < 1) return false;
    let s = string.toLowerCase();
    let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(s[i])) {
            res += s[i];
        }
    }

    return res.length === string.length;
}