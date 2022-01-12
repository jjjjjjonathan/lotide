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
}

// Assertion
const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    } return true;
  }
};

const assertArraysEqual = (firstArray, secondArray) => {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅ Assertion Passed: ${firstArray} === ${secondArray}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${firstArray} !== ${secondArray}.`);
  }
};
