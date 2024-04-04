const inputs = require('fs').readFileSync('src/bakjun/insertionSort/24056/input.txt').toString().split("\n");
const arrayLength = inputs[0];
const targetArray = inputs[2].split(" ").map(Number);

let sortArray = inputs[1].split(" ").map(Number);

let sameIndexes = {};
let sameCount = 0;
let count = 0;

for (let i = 0; i < arrayLength; i++) {
	if (sortArray[i] === targetArray[i]) {
		sameIndexes[i] = true;
		sameCount++;
	} else {
		sameIndexes[i] = false;
	}
}

if (sameCount === arrayLength) {
	count = 1;
} else {
	for (let i = 1; i < arrayLength; i++) {
		const thisItem = sortArray[i];

		let j = i - 1;

		while (0 <= j && sortArray[j] > thisItem) {
			const sortIndex = j + 1;
			sortArray[sortIndex] = sortArray[j];

			if (sortArray[sortIndex] === targetArray[sortIndex]) {
				if (!sameIndexes[sortIndex]) {
					sameIndexes[sortIndex] = true;
					sameCount++;
				}

				if (sameCount === arrayLength) {
					count = 1;
					console.log(count);
					return;
				}
			} else {
				if (sameIndexes[sortIndex]) {
					sameIndexes[sortIndex] = false;
					sameCount--;
				}
			}

			j = j - 1;
		}

		if (j + 1 !== i) {
			const sortIndex = j + 1;
			sortArray[sortIndex] = thisItem;

			if (sortArray[sortIndex] === targetArray[sortIndex]) {
				if (!sameIndexes[sortIndex]) {
					sameIndexes[sortIndex] = true;
					sameCount++;
				}

				if (sameCount === arrayLength) {
					count = 1;
					console.log(count);
					return;
				}
			} else {
				if (sameIndexes[sortIndex]) {
					sameIndexes[sortIndex] = false;
					sameCount--;
				}
			}
		}
	}
}

console.log(count);
