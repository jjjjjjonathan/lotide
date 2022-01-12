// Assertion
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } return results;
};

/* countOnly function
const countOnly = (allItems, itemsToCount) => {
  let results = {};
  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[allItems[i]] === true) {
      if (results[allItems[i]] === undefined) {
        results[allItems[i]] = 1;
      } else {
        results[allItems[i]] += 1;
      }
    }
  } return results;
}; */