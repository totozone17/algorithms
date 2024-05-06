const getInsertionSort = (inputs) => {
  for (let i = 1; i < inputs.length; i++) {
    let value = inputs[i];

    let j = i - 1;
    while (j >= 0 && inputs[j] > value) {
      inputs[j + 1] = inputs[j];
      j = j - 1;
    }

    if (j !== i - 1) {
      inputs[j + 1] = value;
    }
  }

  return inputs;
};


export const getAsc = (inputs) => {
  const n = inputs.length;

  let b = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    const index = Math.floor(n * inputs[i]);

    b[index].push(inputs[i]);
  }

  for (let i = 0; i < b.length; i++) {
    b[i] = getInsertionSort(b[i]);
  }

  let c = [];

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      c.push(b[i][j]);
    }
  }

  return c;
};
