/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
    let arr = [[logs[0][0], logs[0][1] - 0]];

    for (let i = 0; i < logs.length; i++) {
        for (let j = i + 1; j < logs.length; j++) {
            arr.push([logs[j][0], logs[j][1] - logs[i][1]]);
            break;
        }
    }
    return arr.sort((a, b) => a[0] - b[0]).sort((a, b) => b[1] - a[1])[0][0];
};