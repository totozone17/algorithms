const getLeftIndex = (index) => {
	return ((index + 1) * 2) - 1;
};

const getRightIndex = (index) => {
	return ((index + 1) * 2);
};

const getParentIndex = (index) => {
	return Math.floor((index + 1) / 2) - 1;
};

const maxHeapify = (inputs, index) => {
	const leftIndex = getLeftIndex(index);
	const rightIndex = getRightIndex(index);

	const maxIndex = inputs.length - 1;
	let largestIndex = index;
	if (leftIndex <= maxIndex && inputs[largestIndex] < inputs[leftIndex]) {
		largestIndex = leftIndex;
	}
	if (rightIndex <= maxIndex && inputs[largestIndex] < inputs[rightIndex]) {
		largestIndex = rightIndex;
	}

	if (index !== largestIndex) {
		const temp = inputs[index];
		inputs[index] = inputs[largestIndex];
		inputs[largestIndex] = temp;
		inputs = maxHeapify(inputs, largestIndex);
	}

	return inputs;
};

export const extractMax = (inputs) => {
	if (inputs.length < 1) {
		throw "힙 부족";
	}

	const lastIndex = inputs.length - 1;

	const max = inputs[0];
	inputs[0] = inputs[lastIndex];
	inputs.pop();

	inputs = maxHeapify(inputs, 0);

	return {
		max,
		inputs
	};
};

export const heapIncreaseKey = (inputs, index, key) => {
	if (key < inputs[index]) {
		throw "새로운 키가 현재 키보다 작다.";
	}
	inputs[index] = key;

	while (index > 0 && inputs[getParentIndex(index)] < inputs[index]) {
		const parentIndex = getParentIndex(index);

		const temp = inputs[index];
		inputs[index] = inputs[parentIndex];
		inputs[parentIndex] = temp;

		index = parentIndex;
	}

	return inputs;
};

export const heapInsert = (inputs, key) => {
	inputs.push(Number.MIN_SAFE_INTEGER);
	return heapIncreaseKey(inputs, inputs.length - 1, key);
};
