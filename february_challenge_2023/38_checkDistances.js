// last and good solution🙂

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < s.length; i++) {
        let firstIndex = s.indexOf(s[i]) + 1;
        let lasIndex = s.lastIndexOf(s[i]) + 1;

        let ans = [lasIndex - firstIndex] - 1;
        let alphaIndex = alpha.indexOf(s[i]);

        if (ans - distance[alphaIndex] !== 0) {
            return false;
        }
    }

    return true;
};


// First and bad solution😁
/*
var checkDistances = function(s, distance) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";

    let arr = [];
    let counterArr = [];

    for (let i = 0; i < s.length; i++) {
        let firstIndex = s.indexOf(s[i]) + 1;
        let lasIndex = s.lastIndexOf(s[i]) + 1;
        if (!arr.includes(firstIndex)) {
            arr.push(lasIndex);
            arr.push(firstIndex);

            ans = [lasIndex - firstIndex] - 1;
            counterArr.push([ans, alpha.indexOf(s[i])]);
        }
    }

    let counter = 0;
    for (let i = 0; i < distance.length; i++) {
        for (let j = 0; j < counterArr.length; j++) {
            if (distance[counterArr[j][1]] === counterArr[j][0]) {
                counter += 1;
            }
        }
        break;
    }

    return counter === counterArr.length;
};
*/