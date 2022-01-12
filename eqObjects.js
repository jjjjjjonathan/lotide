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
  // Loop through key array to compare values of same key
  for (let i of keyArray1) {
    if (object1[i] !== object2[i]) {
      return false;
    }
  } return true;
};
const a = {
  a: "1",
  c: 4,
  b: 2
}
const b = {
  a: "1",
  b: 2,
  c: 4
}
assertEqual(eqObjects(a, b), true)