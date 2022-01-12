const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
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

const without = (source, itemsToRemove) => {
  let remainingItems = [];
  for (let i = 0; i < source.length; i++) {
    remainingItems.push(source[i]);
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remainingItems.pop();
        break;
      }
    }
  } return remainingItems;
};