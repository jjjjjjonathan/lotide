const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const object1 = { 
  basketball: "Toronto Raptors",
  afl: "Western Bulldogs",
  football:  "Chelsea"
};

describe('#findKeyByValue', () => {
  it('returns "afl" when searching for value of "Western Bulldogs"', () => {
    assert.equal(findKeyByValue(object1, "Western Bulldogs"), "afl");
  });
  it('returns undefined with value is not present in the object', () => {
    assert.equal(findKeyByValue(object1, "soccer"), undefined);
  });
});