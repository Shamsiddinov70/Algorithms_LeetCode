var minimumAbsDifference = function (arr) {
    let srtArr = arr.sort((a, b) => a - b);
    let min = Math.abs(srtArr[0] - srtArr[1]);

    for (let i = 0; i < srtArr.length - 1; i++) {
        let temp = Math.min(srtArr[i + 1] - srtArr[i], min);
        if (temp < min) {
            min = temp;
        }
    }

    let r = [];
    for (let i = 0; i < srtArr.length; i++) {
        if (srtArr[i + 1] - srtArr[i] === min) {
            r.push([srtArr[i], srtArr[i + 1]]);
        }
    }

    return r;
};