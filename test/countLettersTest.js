const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it('should return { j: 1, o: 1, n: 3, a: 2, t: 1, h: 2, c: 1, e: 1, g: 1 } for "Jonathan Cheng"', () => {
    assert.deepEqual(countLetters("Jonathan Cheng"), { j: 1, o: 1, n: 3, a: 2, t: 1, h: 2, c: 1, e: 1, g: 1 });
  });
});