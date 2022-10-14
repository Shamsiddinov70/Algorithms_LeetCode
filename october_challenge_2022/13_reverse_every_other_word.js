function reverse(str) {
    let result = [];
    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i++) {
        (i % 2 === 0) ? result.push(arr[i]) : result.push(arr[i].split('').reverse().join(''));
    }

    return result.join(' ').trim();
}