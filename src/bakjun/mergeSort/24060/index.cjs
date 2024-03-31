const inputs = require('fs').readFileSync('src/bakjun/mergeSort/24060/input.txt').toString().split("\n");
const firstLine = inputs[0].split(" ").map(Number);

let array = inputs[1].split(" ").map(Number);
let count = 0;
let countNumber = -1;

const K = firstLine[1];

const merge = (start, mid, end) => {
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
		count = count + 1;
		if (count === K) {
			countNumber = array[i];
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

mergeSort(0, array.length - 1);

console.log(countNumber);
