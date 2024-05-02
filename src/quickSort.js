export const partition = (inputs, p, r) => {
  const x = inputs[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (inputs[j] <= x) {
      i = i + 1;
      const temp = inputs[j];
      inputs[j] = inputs[i];
      inputs[i] = temp;
    }
  }

  i = i + 1;

  inputs[r] = inputs[i];
  inputs[i] = x;

  return {
    inputs,
    q: i,
  };
};

export const quickSort = (inputs, p, r) => {
  if (p < r) {
    const result = partition(inputs, p, r);

    const q = result.q;
    inputs = result.inputs;
    inputs = quickSort(inputs, p, q - 1);
    inputs = quickSort(inputs, q + 1, r);
  }

  return inputs;
};
