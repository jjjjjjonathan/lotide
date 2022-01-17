const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it(`should return [2] for [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`should return ["lewis", "hamilton"] for ["44", "lewis", "hamilton", 44]`, () => {
    assert.deepEqual(middle(["44", "lewis", "hamilton", 44]), ["lewis", "hamilton"]);
  });
});
assertArraysEqual(middle([1, 2, 3]), [2]);