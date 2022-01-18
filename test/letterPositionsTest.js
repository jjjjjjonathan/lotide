const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const str = "Jonathan Cheng";
const str2 = "Jonathan Cheng 888%"

describe('#letterPositions', () => {
  it('returns the proper indexes of each letter', () => {
    assert.deepEqual(letterPositions(str), {
      j: [ 0 ],
      o: [ 1 ],
      n: [ 2, 7, 12 ],
      a: [ 3, 6 ],
      t: [ 4 ],
      h: [ 5, 10 ],
      c: [ 9 ],
      e: [ 11 ],
      g: [ 13 ]
    })
  });
  it('ignores spaces, symbols, and numbers', () => {
    assert.deepEqual(letterPositions(str2), {
      j: [ 0 ],
      o: [ 1 ],
      n: [ 2, 7, 12 ],
      a: [ 3, 6 ],
      t: [ 4 ],
      h: [ 5, 10 ],
      c: [ 9 ],
      e: [ 11 ],
      g: [ 13 ]
    })
  });
});