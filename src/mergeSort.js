const MAX = Number.MAX_SAFE_INTEGER;

const getSort = (inputs, a, c) => {
	if (a < c) {
		const b = Math.floor((a + c) / 2);

		const fronts = [ ...getSort(inputs, a, b), MAX ];
		const backs = [ ...getSort(inputs, b + 1, c), MAX ];

		const sorted = [];

		let i = 0;
		let j = 0;

		while (fronts[i] !== MAX || backs[j] !== MAX) {
			if (fronts[i] <= backs[j]) {
				if (fronts[i] !== MAX) {
					sorted.push(fronts[i++]);
				}
			} else {
				if (backs[j] !== MAX) {
					sorted.push(backs[j++]);
				}
			}
		}

		return sorted;
	} else {
		return [inputs[a]];
	}
};

export const getAsc = (inputs) => {
	return getSort(inputs, 0, inputs.length - 1);
};

const _getMerge = (inputs, start, middle, end) => {
	let newInputs = [ ...inputs ];
	let frontLength = middle - start + 1;
	let backLength = end - middle;

	const fronts = [];
	const backs = [];

	for (let i = 0; i < frontLength; i++) {
		fronts.push(newInputs[start + i]);
	}

	for (let i = 0; i < backLength; i++) {
		backs.push(newInputs[middle + 1 + i]);
	}

	fronts.push(MAX);
	backs.push(MAX);

	let i = 0;
	let j = 0;
	for (let k = start; k <= end; k++) {
		if (fronts[i] <= backs[j]) {
			newInputs[k] = fronts[i++];
		} else {
			newInputs[k] = backs[j++];
		}
	}

	return newInputs;
};

const _getMergeWithoutBoundary = (inputs, start, middle, end) => {
	let newInputs = [ ...inputs ];
	let frontLength = middle - start + 1;
	let backLength = end - middle;

	const fronts = [];
	const backs = [];

	for (let i = 0; i < frontLength; i++) {
		fronts.push(newInputs[start + i]);
	}

	for (let i = 0; i < backLength; i++) {
		backs.push(newInputs[middle + 1 + i]);
	}

	let i = 0;
	let j = 0;
	for (let k = start; k <= end; k++) {
		if (!fronts[i] || !backs[j]) {
			if (!fronts[i]) {
				newInputs[k] = backs[j++];
			} else {
				newInputs[k] = fronts[i++];
			}
		} else {
			if (fronts[i] <= backs[j]) {
				newInputs[k] = fronts[i++];
			} else {
				newInputs[k] = backs[j++];
			}
		}
	}

	return newInputs;
};

const _getMergeSort = (inputs, start, end) => {
	if (start < end) {
		const middle = Math.floor((start + end) / 2);

		let newInputs = [ ...inputs ];
		newInputs = _getMergeSort(newInputs, start, middle);
		newInputs = _getMergeSort(newInputs, middle + 1, end);

		return _getMergeWithoutBoundary(newInputs, start, middle, end);
	} else {
		return inputs;
	}
};

export const getMergeSort = (inputs) => {
	const start = 0;
	const end = inputs.length - 1;
	return _getMergeSort(inputs, start, end);
};

export const getIndex = (inputs, value) => {
	let index = -1;

	let start = 0;
	let end = inputs.length - 1;

	while (index === -1 && start <= end) {
		if (start === end) {
			if (inputs[start] === value) {
				index = start;
			} else {
				break;
			}
		} else {
			const mid = Math.floor((start + end) / 2);
			if (inputs[mid] === value) {
				index = mid;
			} else {
				if (value < inputs[mid]) {
					end = mid - 1;
				} else {
					start = mid + 1;
				}
			}
		}
	}

	return index;
};

const _getSumMergSort = (inputs, start, end) => {
	if (start < end) {
		const mid = Math.floor((start + end) / 2);

		const left = _getSumMergSort(inputs, start, mid);
		const right = _getSumMergSort(inputs, mid + 1, end);

		const newSorted = [];
		let i = 0;
		let j = 0;
		while (left[i] || right[j]) {
			if (!left[i] || !right[j]) {
				if (!left[i]) {
					newSorted.push(right[j++]);
				} else {
					newSorted.push(left[i++]);
				}
			} else {
				if (left[i] <= right[j]) {
					newSorted.push(left[i++]);
				} else {
					newSorted.push(right[j++]);
				}
			}
		}

		return newSorted;
	} else {
		return [inputs[start]];
	}
};

const _getSumHasGroup = (sortedInputs, finding) => {
	const indexes = [];

	let start = 0;
	let end = sortedInputs.length - 1;

	while (start <= end) {
		if (start === end) {
			if (sortedInputs[start] === finding) {
				indexes.push(start);
				if (sortedInputs[start - 1] && sortedInputs[start - 1] === finding) {
					indexes.push(start - 1);
				}
				if (sortedInputs[start + 1] && sortedInputs[start + 1] === finding) {
					indexes.push(start + 1);
				}
			}
			break;

		} else {
			const mid = Math.floor((start + end) / 2);

			if (sortedInputs[mid] === finding) {
				indexes.push(mid);
				if (sortedInputs[mid - 1] && sortedInputs[mid - 1] === finding) {
					indexes.push(mid - 1);
				}
				if (sortedInputs[mid + 1] === finding) {
					indexes.push(mid + 1);
				}
				break;

			} else {
				if (finding < sortedInputs[mid]) {
					end = mid - 1;
				} else {
					start = mid + 1;
				}
			}
		}
	}

	return indexes;
};

export const getSum = (inputs, x) => {
	let hasSum = false;

	const start = 0;
	const end = inputs.length - 1;
	const sortedInputs = _getSumMergSort(inputs, start, end);

	for (let i = 0; i < sortedInputs.length; i++) {
		const findingIndexes = _getSumHasGroup(sortedInputs, x - sortedInputs[i]);
		if (findingIndexes.filter((index) => index !== i).length > 0) {
			hasSum = true;
			break;
		}
	}

	return hasSum;
};
