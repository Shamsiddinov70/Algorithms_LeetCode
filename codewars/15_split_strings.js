function solution(str) {
    if (str.length % 2 !== 0) {
        str += "_";
    }

    let r = [];
    for (let i = 0; i < str.length - 1; i++) {
        r.push(str[i] + str[i + 1])
    }

    let ans = [];
    r.map((e, i) => {
        if (i % 2 === 0) ans.push(e);
    })

    return ans;
}