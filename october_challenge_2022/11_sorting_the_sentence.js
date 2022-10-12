var sortSentence = function (s) {
    let arr = s.split(' ');
    let indexArr = [];
    for (let i = 0; i < arr.length; i++) {

        let j = 1;

        while (j <= 9) {
            if (arr[i].includes(j.toString()))
                indexArr.push([arr[i], j])
            j++;
        }
    }

    let sortedArr = indexArr.sort((a, b) => a[1] - b[1]).map(e => e[0]);

    return sortedArr.map(string => string.slice(0, -1)).join(' ');
};