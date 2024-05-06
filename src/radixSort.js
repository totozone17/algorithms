const countings = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const countingSort = (inputs, index) => {
  let c = {};

  for (let i = 0; i < countings.length; i++) {
    c[countings[i]] = 0;
  }

  for (let i = 0; i < inputs.length; i++) {
    c[inputs[i].charAt(index)] = c[inputs[i].charAt(index)] + 1;
  }

  const keys = Object.keys(c);
  for (let i = 1; i < keys.length; i++) {
    c[keys[i]] = c[keys[i]] + c[keys[i - 1]];
  }

  let b = [];

  for (let i = inputs.length - 1; i >= 0; i--) {
    b[c[inputs[i].charAt(index)] - 1] = inputs[i];
    c[inputs[i].charAt(index)] = c[inputs[i].charAt(index)] - 1;
  }

  return b;
};

export const getAsc = (inputs, times) => {
  let time = 0;

  for (let i = inputs[0].length - 1; i >= 0; i--) {
    inputs = countingSort(inputs, i);
    time = time + 1;
    if (time >= times) {
      break;
    }
  }

  return inputs;
};
