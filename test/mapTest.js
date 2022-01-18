const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe('#map', () => {
  it('returns first letter of each string in array', () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])
  });
  it('returns hello if string in array contains a lowercase t', () => {
    assert.deepEqual(map(words, word => {
      if (word[0] === "t") {
        return "hello";
      } else {
        return word;
      }
    }), ["ground", "control", "hello", "major", "hello"]);
  });
  it('changes the string to just a lowercase j if it never included one', () => {
    assert.deepEqual(map(words, word => {
      if (!word.includes("j")) {
        return "j";
      } else {
        return word;
      }
    }), ["j", "j", "j", "major", "j"]);
  });
});