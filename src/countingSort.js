export const getAsc = (inputs, max) => {
  let b = [];
  let c = [];

  for (let i = 0; i <= max; i++) {
    c[i] = 0;
  }

  for (let i = 0; i < inputs.length; i++) {
    c[inputs[i]] = c[inputs[i]] + 1;
  }

  for (let i = 1; i < c.length; i++) {
    c[i] = c[i] + c[i - 1];
  }

  // for (let i = inputs.length - 1; i >= 0; i--) {
  for (let i = 0; i < inputs.length; i++) {
    b[c[inputs[i]] - 1] = inputs[i];
    c[inputs[i]] = c[inputs[i]] - 1;
  }

	return b;
};
