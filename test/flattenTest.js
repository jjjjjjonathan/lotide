const assert = require('chai').assert;
const flatten = require('../flatten');

const arr = [1, 2, [3, 4], 5, [6]];
const arr2 = [1, 2, [3, 4], 5, [6, [7, 8]]];

describe('#flatten', () => {
  it('flattens one level of nesting in arrays', () => {
    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6]);
  });
  it('does not work with over one level of nested arrays', () => {
    assert.deepEqual(flatten(arr2), [1, 2, 3, 4, 5, 6, [7, 8]]);
  });
});