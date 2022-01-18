const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it('should return {raptors: 2, chelsea: 1} for ["raptors", "raptors", "chelsea", "tfc", "grizzlies"], {raptors: true, chelsea: true, tfc: false}', () => {
    assert.deepEqual(countOnly(["raptors", "raptors", "chelsea", "tfc", "grizzlies"], {raptors: true, chelsea: true, tfc: false}), {raptors: 2, chelsea: 1});
  });
});