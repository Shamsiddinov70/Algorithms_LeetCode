var average = function (salary) {
    let srt = salary.sort((a, b) => a - b);

    srt.shift();
    srt.pop();

    let result = 0;

    for (let n of srt) {
        result += n;
    }

    return result / srt.length;
};