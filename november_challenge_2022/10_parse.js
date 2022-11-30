function parse(data) {
    let ans = [];
    let num = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === "i") num += 1;
        if (data[i] === "s") num *= num;
        if (data[i] === "d") num -= 1;
        if (data[i] === "o") ans.push(num);
    }

    return ans;
}