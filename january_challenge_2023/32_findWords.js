/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const firstRow = 'qwertyuiop';
    const secondRow = 'asdfghjkl';
    const thirdRow = 'zxcvbnm';

    let res = [];
    for (const word of words) {
        let arr = [...new Set(word.toLowerCase())];

        let first = 0;
        let second = 0;
        let third = 0;

        for (let i = 0; i < arr.length; i++) {
            if (firstRow.includes(arr[i]))
                first++;
            if (secondRow.includes(arr[i]))
                second++;
            if (thirdRow.includes(arr[i]))
                third++;
        }

        let len = arr.length;

        if (len === first || len === second || len === third) {
            res.push(word);
        }
    }

    return res;
};

//Python solution
/*
class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        first_row = 'qwertyuiop'
        second_row = 'asdfghjkl'
        third_row = 'zxcvbnm'

        result = []
        for word in words:
            set_letters = list(set(word.lower()))

            first = 0
            second = 0
            third = 0

            for i in range(len(set_letters)):
                if set_letters[i] in first_row:
                    first += 1
                if set_letters[i] in second_row:
                    second += 1
                if set_letters[i] in third_row:
                    third += 1

            leng = len(set_letters)

            if leng == first or leng == second or leng == third:
                result.append(word)

        return result
*/