var sortPeople = function (names, heights) {
    let arr = [];

    for (let i = 0; i < names.length; i++) {
        arr.push([names[i], heights[i]])
    }

    return arr.sort((a, b) => b[1] - a[1]).map((e) => e[0]);
};