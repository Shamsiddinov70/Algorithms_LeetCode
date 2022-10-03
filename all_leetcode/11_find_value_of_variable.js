var finalValueAfterOperations = function (operations) {

    let xP = "X++";
    let pX = "++X";

    let xM = "X--";
    let mX = "--X";

    result = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === xP || operations[i] === pX) {
            result += 1;
        }

        if (operations[i] === xM || operations[i] === mX) {
            result += -1;
        }
    }

    return result;
};