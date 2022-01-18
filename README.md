# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jonathanmcheng/lotide`

**Require it:**

`const _ = require('@jonathanmcheng/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(sentence)`: Takes in a string, and outputs an object that lists how many times each letter was used (not case sensitive). Only unaccented letters will be counted and returned in the output.
* `countOnly(allItems, itemsToCount)`: Takes in an array of strings, and an object with keys with the value of true. Outputs a results object containing how many times they were counted in the array. If values in `itemsToCount` are `false`, or they are entirely unlisted in the parameter, they will be ignored for counting purposes.
* `findKey(object, callback)`: Takes in an object, and returns the first value that matches the callback and gives a truthy value. If a truthy value is never given, `undefined` is returned.
* `findKeyByValue(object, key)`: Outputs a value which is linked with the value submitted in the object submitted.
* `flatten(array)`: Takes in an array, and outputs a flattened array. Only works with one level of nesting.
* `head(array)`: Takes in an array of items, and returns only the first item from index 0.
* `letterPositions(string)`: Takes in a string, and outputs an object with keys of each letter used (not case sensitive), and the value for each key is an array containing the indexes of all the positions the letter appeared in the string. Only letters are counted, no spaces, symbols, or numbers.
* `map(array, callback)`: Executes callback function on each item in the given array.
* `middle(array)`: Returns an array containing only the middle index of the original array. If there is an even number of entries in the array, it will return the two middle entries.
* `tail(array)`: Removes the first item in the array, and returns the rest.
* `takeUntil(array, callback)`: Returns items from the array, but only until the callback becomes false which will break the loop.
* `without(source, itemsToRemove)`: Takes in an array of items, and an array of items you want to remove from the source array. Returns an array with the items removed.
* `eqObjects(object1, object2)`: Checks if both objects submitted are identical or not. Returns true if identical, false if not. Can check for arrays within objects too.
* `assertObjectsEqual(actual, expected)`: Assertion for the eqObjects function to test if it's working.
* `eqArrays(array1, array2)`: Checks if both arrays submitted are identical or not. Returns true if identical, false if not.
* `assertArraysEqual(actual, expected)`: Assertion for the eqArrays function to test if it's working.
* `assertEqual(actual, expected)`: Assertion for primitive data types. Returns true if they're identical, false if not.