console.time(`in`);

const inputs = require('fs').readFileSync('src/bakjun/insertionSort/24051/input.txt').toString().split("\n");

const [length, count] = inputs[0].split(" ").map(Number);
const secondLine = inputs[1].split(" ").map(Number);

let savedCount = 0;

let newItem = null;
let j = null;
for (let i = 1; i < length; i++) {
	newItem = secondLine[i];

	j = i - 1;
	while(secondLine[j] > newItem && 0 <= j) {
		secondLine[j + 1] = secondLine[j];
		j -= 1;

		savedCount += 1;
		if (savedCount === count) {
			console.log(secondLine[j + 1]);
			console.timeEnd(`in`);
			return;
		}
	}

	if (i !== j + 1) {
		secondLine[j + 1] = newItem;

		savedCount += 1;
		if (savedCount === count) {
			console.log(secondLine[j + 1]);
			console.timeEnd(`in`);
			return;
		}
	}
}

console.log(-1);
console.timeEnd(`in`);