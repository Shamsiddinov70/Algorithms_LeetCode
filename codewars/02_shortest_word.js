function findShort(s) {
    let arr = s.split(' ');

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].length;
        result.push(element);
    }

    return result.reduce((a, b) => a < b ? a : b);
}