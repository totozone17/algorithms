const inputs = require('fs').readFileSync('src/bakjun/dp/12865/input.txt').toString().split("\n");

const firstLine = inputs.shift().split(" ").map(Number);
const ITEM_COUNT = firstLine[0];
const MAX_WEIGHT = firstLine[1];

let bagMap = [];

for (let weight = 0; weight <= MAX_WEIGHT; weight++) {
  bagMap[weight] = [];
  bagMap[weight][0] = 0;
}

for (let item = 0; item <= ITEM_COUNT; item++) {
  bagMap[0][item] = 0;
}

// [weight, value];
const items = inputs.map(line => {
  return line.split(" ").map(Number);
});

for (let item = 1; item <= ITEM_COUNT; item++) {
  for (let weight = 1; weight <= MAX_WEIGHT; weight++) {
    const thisItem = items[item - 1];

    const thisWeight = thisItem[0];
    const thisValue = thisItem[1];

    const prevBagValue = bagMap[weight][item - 1];

    if (thisWeight <= weight) {
      const extraMaxWeight = weight - thisWeight;
      const extraBagValue = bagMap[extraMaxWeight] ? bagMap[extraMaxWeight][item - 1] : 0;
      const newBagValue = thisValue + extraBagValue;

      if (newBagValue > prevBagValue) {
        bagMap[weight][item] = newBagValue;
      } else {
        bagMap[weight][item] = prevBagValue;
      }
    } else {
      bagMap[weight][item] = prevBagValue;
    }
  }
}

const maxValue = bagMap[MAX_WEIGHT][ITEM_COUNT];
console.log(maxValue);