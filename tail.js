// assertEqual function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// tail function
let arrayTail = [];
const tail = itemArray => {
  if (itemArray.length >= 2) {
    arrayTail = itemArray.slice(1);
  }
};
