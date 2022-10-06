var number = function (array) {
    if (array === []) return array;

    let ans = [];
    for (let i = 0; i < array.length; i++) {
        ans.push(`${i + 1}: ${array[i]}`)
    }
    return ans;
}