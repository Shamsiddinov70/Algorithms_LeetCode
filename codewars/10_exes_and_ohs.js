function XO(str) {
    let arr = str.toLowerCase().split('');

    [x, o] = ["", ""];

    arr.map((e) => {
        if (e !== "x" && e !== "o") return true;

        if (e === "x") x += e;

        if (e === "o") o += e;
    });

    return x.length === o.length ? true : false;
}