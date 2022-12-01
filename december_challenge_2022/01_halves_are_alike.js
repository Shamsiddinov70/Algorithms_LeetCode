var halvesAreAlike = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let len = s.length;
    let left = s.substring(0, len / 2).toLowerCase();
    let right = s.substring(len / 2).toLowerCase();

    let firstHalf = "";
    let secondHalf = "";

    for (let i = 0; i < len / 2; i++) {
        if (vowels.includes(left[i])) firstHalf += left[i];
        if (vowels.includes(right[i])) secondHalf += right[i];
    }

    return firstHalf.length === secondHalf.length;
};