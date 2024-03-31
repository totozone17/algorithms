export const getAsc = (inputs) => {
	const length = inputs.length;

	for (let i = 0; i < length -1; i++) {
		const thisItem = inputs[i];

		let minIndex = i;
		for (let j = i; j < length; j++) {
			if (inputs[minIndex] > inputs[j]) {
				minIndex = j;
			}
		}

		inputs[i] = inputs[minIndex];
		inputs[minIndex] = thisItem;
	}

	return inputs;
};
