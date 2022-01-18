const assert = require('chai').assert;
const findKey = require('../findKey');

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('#findKey', () => {
  it('should return undefined if callback is not in object', () => {
    assert.equal(findKey(object1, x => x.stars === 4), undefined);
  });
  it ('should return "noma" since it is the first property with the callback of having two stars', () => {
    assert.equal(findKey(object1, x => x.stars === 2), "noma");
  });
});