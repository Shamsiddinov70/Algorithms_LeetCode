var cellsInRange = function (s) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let splitted = s.split(':').toString().toLowerCase().split('');

    let letter1 = splitted[0];
    let letter2 = splitted[3];

    let num1 = splitted[1] - 0;
    let num2 = splitted.pop() - 0;

    let index1 = 0;
    let index2 = 0;

    alphabet.map((e) => {
        if (e === letter1) {
            index1 = alphabet.indexOf(e);
        }

        if (e === letter2) {
            index2 = alphabet.indexOf(e);
        }
    });


    let res = [];

    for (let i = index1; i <= index2; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (alphabet.indexOf(alphabet[j]) === i) {
                res.push(alphabet[j])
            }
        }
    }

    let box = [];

    for (let i = num1; i <= num2; i++) {
        for (let j = 0; j < res.length; j++) {
            box.push(res[j] + num1);
        }
        num1++
    }

    return box.sort().join(',').toUpperCase().split(",");
};