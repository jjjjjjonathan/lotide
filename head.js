const assertEqual = require('./assertEqual');

// head function
const head = itemArray => {
  if (itemArray.length === 0) {
    return undefined;
  } else {
    return itemArray[0];
  }
};

module.exports = head;