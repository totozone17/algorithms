const inputs = require('fs').readFileSync('src/bakjun/mergeSort/24062/input.txt').toString().split("\n");

const targetArray = inputs[2].split(" ").map(Number);
const length = targetArray.length;

let array = inputs[1].split(" ").map(Number);
let count = 0;

let sameIndexes = {};
let sameCount = 0;

const merge = (start, mid, end) => {
	if (count === 1) {
		return false;
	}

	let i = start;
	let j = mid + 1;

	const temp = [];

	while (i <= mid && j <= end) {
		if (array[i] <= array[j]) {
			temp.push(array[i++]);
		} else {
			temp.push(array[j++]);
		}
	}

	while (i <= mid) {
		temp.push(array[i++]);
	}
	while (j <= end) {
		temp.push(array[j++]);
	}

	i = start;
	j = 0;
	while (i <= end) {
		array[i] = temp[j++];


		if (array[i] === targetArray[i]) {
			if (sameIndexes[i]) {
				// do nothing;
			} else {
				sameIndexes[i] = true;
				sameCount++;
			}

			if (sameCount === length) {
				count = 1;
				return false;
			}
		} else {
			if (sameIndexes[i]) {
				sameIndexes[i] = false;
				sameCount--;
			} else {
				// do nothing;
			}
		}

		i = i + 1;
	}
};

const mergeSort = (start, end) => {
	if (start < end) {
		const mid = Math.floor((start + end) / 2);
		mergeSort(start, mid);
		mergeSort(mid + 1, end);

		merge(start, mid, end);
	}
};

for (let i = 0; i < length; i++) {
	if (array[i] === targetArray[i]) {
		sameIndexes[i] = true;
		sameCount++;
	} else {
		sameIndexes[i] = false;
	}
}

if (sameCount === length) {
	count = 1;
} else {
	mergeSort(0, array.length - 1);
}

console.log(count);
