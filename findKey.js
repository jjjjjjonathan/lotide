const findKey = (object, callback) => {
  for (const property in object) {
    if (callback(object[property])) {
      return property;
    }
  } return undefined;
};

module.exports = findKey;