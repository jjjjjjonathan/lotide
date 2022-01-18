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

module.exports = flatten;