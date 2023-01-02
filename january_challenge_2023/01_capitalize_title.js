/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let t = title.split(' ');
    let arr = [];
    for (let w of t) {
        if (w.length > 2) {
            let word = w.charAt(0).toUpperCase().concat(w.slice(1).toLowerCase());
            arr.push(word);
        }
        else {
            arr.push(w.toLowerCase());
        }
    }

    return arr.join(' ');
};