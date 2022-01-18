const assert = require('chai').assert;
const without = require('../without');
const source = ["Toronto", "Maple", "Leafs", "Raptors"];
const itemsToRemove = ["Maple", "Leafs"];
describe('#without', () => {
  it('removes Maple and Leafs from the source, leaving just Toronto Raptors', () => {
    assert.deepEqual(without(source, itemsToRemove), ["Toronto", "Raptors"]);
  });
});