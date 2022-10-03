function isIsogram(str) {
    let strLower = str.toLowerCase();

    let unique = '';

    for (let i = 0; i < strLower.length; i++) {
        if (!unique.includes(strLower[i])) {
            unique += strLower[i];
        }
    }
    return unique.length === strLower.length;
}