/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let words = sentence.split(" ");
  let vowels = ["a", "e", "i", "o", "u"];
  let ans = [];

  for (let index = 0; index < words.length; index++) {
    if (vowels.includes(words[index][0].toLowerCase())) {
      let resWord = words[index] + "ma";
      let i = 0;
      while (i <= index) {
        resWord += "a";
        i++;
      }
      ans.push(resWord);
    } else {
      let resWord = words[index].slice(1) + words[index][0] + "ma";
      let i = 0;
      while (i <= index) {
        resWord += "a";
        i++;
      }
      ans.push(resWord);
    }
  }
  return ans.join(" ");
};
