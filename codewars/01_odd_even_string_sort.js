//1-solution

function sortEvenOdd(S) {
    let result = [];
    let result2 = [];
    let result3 = [' ' + ''];

    for (let i = 0; i < S.length; i++) {
        result.push(S[i])
    }

    result.map((el, index) => {
        if (index % 2 === 0) {
            result2.push(el)
        }
    });

    result.map((el, index) => {
        if (index % 2 !== 0) {
            result3.push(el)
        }
    });

    // return result2.concat(result3).join('')
    return [...result2, ...result3].join('');
}

console.log(sortEvenOdd('CodeWars'));

// 2-better solution
function sortMyString(S) {
    [r1, r2] = [[], []];

    S.split('').map((e, i) => i % 2 === 0 ? r1.push(e) : r2.push(e));
    return [...r1, ' ', ...r2].join('');
};

console.log(sortMyString('CodeWars'));