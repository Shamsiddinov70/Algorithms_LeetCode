function spinWords(string) {
    let arr = string.split(' ');

    let newStr = '';

    for (let i = 0; i < arr.length; i++) {
        let len = arr[i].length >= 5;
        let revStr = arr[i].split('').reverse().join('') + " ";

        len ? newStr += revStr : newStr += arr[i] + " ";
    }

    return newStr.slice(0, newStr.length - 1);
}