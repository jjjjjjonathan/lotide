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
  let valueArray1 = Object.values(object1);
  let keyArray2 = Object.keys(object2);
  let valueArray2 = Object.values(object2);
  // Loop through object1's keys and values in the arrays
  for (let i = 0; i < keyArray1.length; i++) {
    if (valueArray1[i] !== object2[keyArray1[i]]) {
      return false;
    }
  }
  // Loop through object2's keys and values in arrays
  for (let i = 0; i < keyArray2.length; i++) {
    if (valueArray2[i] !== object1[keyArray2[i]]) {
      return false;
    }
  } return true;
};