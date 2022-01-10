// assertEqual function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// head function
const head = itemArray => {
  if (itemArray.length === 0) {
    return undefined;
  } else {
    return itemArray[0];
  }
};