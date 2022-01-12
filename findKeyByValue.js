// Assertopm
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const findKeyByValue = (objectToCheck, valueToFind) => {
  let keyArray = Object.keys(objectToCheck)
  let valueArray = Object.values(objectToCheck);
  return keyArray[valueArray.indexOf(valueToFind)];
};