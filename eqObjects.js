const eqArrays = require('./eqArrays');

// Function
const eqObjects = (object1, object2) => {
  let keyArray1 = Object.keys(object1);
  let keyArray2 = Object.keys(object2);
  if (keyArray1.length !== keyArray2.length) {
    return false;
  }
  // Loop through key array to compare values of same key
  for (let i of keyArray1) {
    if (Array.isArray(object1[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        return false;
      }
    } else if (typeof object1[i] === 'object') {
      if (!eqObjects(object1[i], object2[i])) {
        return false;
      }
    } else {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  } return true;
};

module.exports = eqObjects;