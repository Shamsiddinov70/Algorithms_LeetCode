var canMakeArithmeticProgression = function (arr) {
    let srt = arr.sort((a, b) => a - b);

    let target = srt[1] - srt[0];

    let ar = [];

    for (let i = 0; i < srt.length - 1; i++) {
        (srt[i + 1] - srt[i] === target) ? ar.push(true) : ar.push(false);
    }

    if (ar.includes(false)) return false;

    return true;
};