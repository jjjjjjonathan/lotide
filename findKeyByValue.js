const findKeyByValue = (objectToCheck, keyToFind) => {
  let keyArray = Object.keys(objectToCheck)
  let valueArray = Object.values(objectToCheck);
  return keyArray[valueArray.indexOf(keyToFind)];
};

module.exports = findKeyByValue;