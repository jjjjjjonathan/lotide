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


const flatten = unflattenedArray => {
  let flattenedArray = [];
  for (let i = 0; i < unflattenedArray.length; i++) {
    if (Array.isArray(unflattenedArray[i])) {
      for (let j = 0; j < unflattenedArray[i].length; j++) {
        flattenedArray.push(unflattenedArray[i][j]);
      }
    } else {
      flattenedArray.push(unflattenedArray[i]);
    }
  } return flattenedArray;
};