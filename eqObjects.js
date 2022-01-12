// Assertion

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// Function
const eqObjects = (object1, object2) => {
  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);
  if (keyArray1.length !== keyArray2.length) {
    return false;
  }
  let valueArray1 = Object.values(object1);
  // Loop through object1's keys and values in the arrays
  for (let i = 0; i < keyArray1.length; i++) {
    if (valueArray1[i] !== object2[keyArray1[i]]) {
      return false;
    }
  } return true;
};