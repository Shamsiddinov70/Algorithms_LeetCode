function isCoprime(x, y) {
    let firstBox = [];
    let secondBox = [];

    for (let i = 1; i <= x; i++) {
        if (Number.isInteger(x / i)) {
            firstBox.push(i);
        }
    }

    for (let j = 1; j <= y; j++) {
        if (Number.isInteger(y / j)) {
            secondBox.push(j);
        }
    }

    let res = 0;

    for (let n1 of firstBox) {
        for (let n2 of secondBox) {
            n1 === n2 ? res = n1 : null;
        }
    }

    return res === 1;
}