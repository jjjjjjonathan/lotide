const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data = ["I've", "been", "to", "Hong Kong", ",", "I've", "been", "to", "London"];

describe('#takeUntil', () => {
  it('returns an array saying "I\'ve been to Hong Kong', () => {
    assert.deepEqual(takeUntil(data, x => x === ','), ["I've", "been", "to", "Hong Kong"]);
  });
});