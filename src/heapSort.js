const getLeftIndex = (index) => {
	return ((index + 1) * 2) - 1;
}

const getRightIndex = (index) => {
	return ((index + 1) * 2);
}

export const getMaxHeapify = (inputs, index) => {
	const length = inputs.length;

	let leftIndex = getLeftIndex(index);
	let rightIndex = getRightIndex(index);

	let maxIndex = index;

	if (leftIndex <= length && inputs[maxIndex] < inputs[leftIndex]) {
		maxIndex = leftIndex;
	}
	if (rightIndex <= length && inputs[maxIndex] < inputs[rightIndex]) {
		maxIndex = rightIndex;
	}
	if (maxIndex !== index) {
		const tempValue = inputs[index];
		inputs[index] = inputs[maxIndex];
		inputs[maxIndex] = tempValue;

		inputs = getMaxHeapify(inputs, maxIndex);
	}

	return inputs;
}

export const getBuildMaxHeap = (inputs) => {
	const midIndex = Math.floor(inputs.length / 2);

	for (let i = midIndex; i >= 0; i--) {
		inputs = getMaxHeapify(inputs, i);
	}

	return inputs;
};

export const getHeapSort = (inputs) => {
	inputs = getBuildMaxHeap(inputs);
	let heapInputs = [ ...inputs ];

	let lastIndex = inputs.length - 1;
	for (lastIndex; lastIndex >= 1; lastIndex--) {
		const tempValue = heapInputs[0];
		heapInputs[0] = heapInputs[lastIndex];
		inputs[0] = heapInputs[lastIndex];
		inputs[lastIndex] = tempValue;

		heapInputs.pop();
		heapInputs = getMaxHeapify(heapInputs, 0);
	}

	return inputs;
};
