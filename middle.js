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

module.exports = middle;