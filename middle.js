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

const middle = initialArray => {
  let arrayToReturn = [];
  if (initialArray.length <= 2) {
    return arrayToReturn;
  } else {
    let i = (initialArray.length - 1) / 2;
    if (initialArray.length % 2 !== 0) {
      arrayToReturn.push(initialArray[i]);
      return arrayToReturn;
    } else {
      let iPlus = i + 0.5;
      let iMinus = i - 0.5;
      arrayToReturn.push(initialArray[iMinus], initialArray[iPlus]);
      return arrayToReturn;
    }
  }
};