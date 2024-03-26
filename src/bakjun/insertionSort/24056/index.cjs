const isArraySame = (_sortArray, _targetArray, startIndex, endIndex) => {
	let isSame = true;

	for (let i = startIndex; i <= endIndex; i++) {
		if (_sortArray[i] !== _targetArray[i]) {
			isSame = false;
			break;
		}
	}

	return isSame;
}

const inputs = require('fs').readFileSync('src/bakjun/insertionSort/24056/input.txt').toString().split("\n");
const arrayLength = inputs[0];
const sortArray = inputs[1].split(" ").map(Number);
const targetArray = inputs[2].split(" ").map(Number);

let isSame = 0;

// 최초 확인.
if (isArraySame(sortArray, targetArray, 0, arrayLength - 1)) {
	isSame = 1;
	console.log(isSame);
	return;
}

for (let i = 1; i < arrayLength; i++) {
	const thisItem = sortArray[i];

	let isFixedSame = null;
	let sameIndex = i + 1;
	let j = i - 1;

	while (0 <= j && sortArray[j] > thisItem) {
		sortArray[j + 1] = sortArray[j];

		if (j + 2 === sameIndex) {
			if (sortArray[j + 1] === targetArray[j + 1]) {
				sameIndex = j + 1;

				if (isFixedSame === null) {
					isFixedSame = isArraySame(sortArray, targetArray, j + 2, arrayLength - 1);
				}

				if (isFixedSame) {
					if (isArraySame(sortArray, targetArray, 0, j)) {
						isSame = 1;
						console.log(isSame);
						return;
					}
				}
			}
		}

		j = j - 1;
	}

	if (j + 1 !== i) {
		sortArray[j + 1] = thisItem;

		if (sortArray[j + 1] === targetArray[j + 1]) {
			if (isFixedSame) {
				if (isArraySame(sortArray, targetArray, 0, j)) {
					isSame = 1;
					console.log(isSame);
					return;
				}
			}
		}
	}
}

console.log(isSame);
