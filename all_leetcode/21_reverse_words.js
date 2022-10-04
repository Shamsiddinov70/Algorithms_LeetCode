var reverseWords = function (s) {
    let str = s.split(' ').reverse();
    let ft = str.filter((e) => e);
    return ft.join(' ');
};