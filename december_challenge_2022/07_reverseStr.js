var reverseStr = function (s, k) {
    if (s.length <= k) {
        return s.split('').reverse().join('');
    }

    let sArr = s.split('');
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(sArr.splice(0, k))
    }

    let result = "";
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result += arr[i].reverse().join('');
        }
        else {
            result += arr[i].join('');
        }
    }

    return result;
};