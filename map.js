const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => {
  if (word[0] === "t") {
    return "hello";
  } else {
    return word;
  }
});
const results3 = map(words, word => {
  if (!word.includes("j")) {
    return "j";
  } else {
    return word;
  }
})

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

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ["ground", "control", "hello", "major", "hello"])
assertArraysEqual(results3, ["j", "j", "j", "major", "j"])