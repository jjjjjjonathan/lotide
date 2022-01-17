const head = require('../head');
const assertEqual = require('../assertEqual');

const array = [1, 2, 3];
const result = head(array);

assertEqual(result, 1)