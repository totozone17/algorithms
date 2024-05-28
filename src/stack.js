let n = 5;

let ascTop = -1;
let descTop = n;

let array = new Array(n);

const ASC = 'asc';
const DESC = 'desc';

const isEmpty = (direction) => {
  if (direction === ASC) {
    if (ascTop === -1) {
      return true;
    } else {
      return false;
    }
  } else if (direction === DESC) {
    if (descTop === n) {
      return true;
    } else {
      return false;
    }
  }
};

const isFull = (direction) => {
  const ascLength = ascTop + 1;
  const descLength = n - descTop;

  if (ascLength + descLength === n) {
    return true;
  } else {
    return false;
  }
};

const push = (direction, item) => {
  if (isFull(direction)) {
    throw new Error('overflow');
  } else {
    if (direction === ASC) {
      ascTop = ascTop + 1;
      array[ascTop] = item;
    } else if (direction === DESC) {
      descTop = descTop - 1;
      array[descTop] = item;
    }
  }
};

const pop = (direction) => {
  if (isEmpty(direction)) {
    throw new Error('underflow');
  } else {
    if (direction === ASC) {
      ascTop = ascTop - 1;
      return array[ascTop + 1];
    } else if (direction === DESC) {
      descTop = descTop + 1;
      return array[descTop - 1];
    }
  }
};

export const pushAsc = (item) => {
  push(ASC, item);
};

export const pushDesc = (item) => {
  push(DESC, item);
};

export const popAsc = () => {
  return pop(ASC);
};

export const popDesc= () => {
  return pop(DESC);
};

export const get = () => {
  return array;
};