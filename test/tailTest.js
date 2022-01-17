const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it('should return [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it(`should return ["go", "raptors"] for ["lets", "go", "raptors"]`, () => {
    assert.deepEqual(tail(["lets", "go", "raptors"]), ["go", "raptors"]);
  });
  it(`should return [] for an array with just one item`, () => {
    assert.deepEqual(tail([1]), []);
  });
});