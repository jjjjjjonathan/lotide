const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

const arr = [1, 2, 3];

assertArraysEqual(tail(arr), [2, 3])