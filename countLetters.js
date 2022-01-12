// Assertion
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// Function
const countLetters = sentence => {
  const alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
  let results = {};
  // Remove spaces from string, and lower case everything since capitalized and uncapitalized letters are considered separate in the count
  let editedSentence = sentence.split(" ").join("").toLowerCase();
  for (const letter of editedSentence) {
    // Check if letter is in the alphabet, so no numbers, spaces, or symbols
    if (alphabet.includes(letter)) {
      // If it's already in the results object, add one to value
      if (results[letter]) {
        results[letter] += 1;
      } else { // Otherwise, add key to object
        results[letter] = 1;
      }
    }
  } return results;
};