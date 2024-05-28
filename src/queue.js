let n = 5;

let head = 0;
let tail = 0;

let array = new Array(n);

const isEmpty = () => {
  if (head === tail) {
    return true;
  } else {
    return false;
  }
};

const isFull = () => {
  if (tail === n - 1) {
    if (head === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (tail + 1 === head) {
      return true;
    } else {
      return false;
    }
  }
};

export const enqueue = (item) => {
  if (isFull()) {
    throw new Error('overflow');
  } else {
    array[tail] = item;

    if (tail === n - 1) {
      tail = 0;
    } else {
      tail = tail + 1;
    }
  }
};

export const dequeue = () => {
  if (isEmpty()) {
    throw new Error('underflow');
  } else {
    let x = array[head];

    if (head === n - 1) {
      head = 0;
    } else {
      head = head + 1;
    }

    return x;
  }
};

export const get = () => {
  return array;
};