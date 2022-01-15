// assertEqual function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (Array.isArray(firstArray[i])) {
        if (!eqArrays(firstArray[i], secondArray[i])) {
          return false;
        }
      } else if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    } return true;
  }
};