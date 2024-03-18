export const getAsc = (inputs) => {
	const length = inputs.length;

	for (let i = 1; i < length; i++) {
		const thisInput = inputs[i];

		let j = i - 1;
		while (0 <= j && inputs[j] > thisInput) {
			inputs[j + 1] = inputs[j];
			j = j - 1;
		}
		inputs[j + 1] = thisInput;
	}

	return inputs;
};

export const getDesc = (inputs) => {
	const length = inputs.length;

	for (let i = 1; i < length; i++) {
		const thisInput = inputs[i];

		let j = i - 1;
		while (0 <= j && inputs[j] < thisInput) {
			inputs[j + 1] = inputs[j];
			j = j - 1;
		}

		inputs[j + 1] = thisInput;
	}

	return inputs;
};

export const searchIndex = (inputs, value) => {
	let i = 0;

	while (i < inputs.length && inputs[i] !== value) {
		i = i + 1;
	}

	return i;
};

export const plusBinary = (a, b) => {
	let c = [];

	let round = 0;
	for (let i = a.length - 1; 0 <= i; i--) {
		let sum = a[i] + b[i] + round;

		if (sum >= 2) {
			round = 1;
		} else {
			round = 0;
		}

		c[i + 1] = sum % 2;
	}

	c[0] = round;

	return c;
};