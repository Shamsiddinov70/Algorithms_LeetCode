/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let ud = 0;
    let lr = 0;

    for (const m of moves) {
        if (m === "U") ud += 1;
        else if (m === "D") ud -= 1;
        else if (m === "R") lr += 1;
        else if (m === "L") lr -= 1;
    }

    return ud === 0 && lr === 0;
};

//////////////////////////////////

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let u = 0, d = 0, l = 0; r = 0;

    for (const m of moves) {
        if (m === "U") u += 1;
        if (m === "D") d += 1;
        if (m === "L") l += 1;
        if (m === "R") r += 1;
    }

    return u === d && l === r;
};