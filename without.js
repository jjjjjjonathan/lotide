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

module.exports = without;