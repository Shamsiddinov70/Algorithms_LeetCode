function dotCalculator(equation) {
    let cS = '';

    for (let i = 0; i < equation.length; i++) {
        if (equation[i] !== ".") {
            cS += equation[i];
        }
    }

    let spl = equation.split(cS);
    let one = spl[0].length;
    let two = spl[1].length;

    let centerSign = cS.trim();

    let ansNum = centerSign === "+" ? one + two : centerSign === "-" ? one - two : centerSign === "*" ? one * two : centerSign === "//" ? Math.floor(one / two) : null;

    let result = '';
    let count = 0;

    while (count < ansNum) {
        result += ".";
        count++;
    }

    return result;
}