// Function
const letterPositions = sentence => {
  const results = {};
  const alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  let editedSentence = sentence.toLowerCase();
  for (let i = 0; i < editedSentence.length; i++) {
    if (alphabet.includes(editedSentence[i])) {
      if (results[editedSentence[i]]) {
        results[editedSentence[i]].push(i);
      } else {
        results[editedSentence[i]] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("Jonathan Cheng"))

module.exports = letterPositions;