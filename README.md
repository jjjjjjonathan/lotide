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

* `countLetters(sentence)`: function takes in a string, and outputs an object that lists how many times each letter was used (not case sensitive). Only unaccented letters will be counted and returned in the output.
* `countOnly(allItems, itemsToCount`: Takes in an array of strings, and an object with keys with the value of true. Outputs a results object containing how many times they were counted in the array. If values in `itemsToCount` are `false`, or they are entirely unlisted in the parameter, they will be ignored for counting purposes.
* `function3(...)`: description