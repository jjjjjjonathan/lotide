const takeUntil = (array, callback) => {
  let finishedArray = [];
  for (const element of array) {
    if (!callback(element)) {
      finishedArray.push(element);
    } else {
      break;
    }
  } return finishedArray;
};