class Solution:
    def uniqueMorseRepresentations(self, words) -> int:
        morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--",
                 "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

        alpha = "abcdefghijklmnopqrstuvwxyz"
        ans = []

        for w in words:
            word = w

            morse_word = ""
            for letter in word:
                morse_word += morse[alpha.index(letter)]

            if not morse_word in ans:
                ans.append(morse_word)

        return len(ans)


# JS solution
'''
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        let morseWord = '';
        for (let j = 0; j < word.length; j++) {
            morseWord += morse[alpha.indexOf(word[j])]
        }

        if (!ans.includes(morseWord))
            ans.push(morseWord);
    }

    return ans.length;
};
'''
