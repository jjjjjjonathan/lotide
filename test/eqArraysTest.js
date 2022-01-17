const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const result = (eqArrays([1, 2, 3], [1, 2, 3]));
assertEqual(result, true);    