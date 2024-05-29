const headKey = 0;

const keyGenerator = () => {
  let itemKey = headKey;

  const getNewKey = () => {
    return ++itemKey;
  };

  return { getNewKey };
};
const getNewKey = keyGenerator().getNewKey;

let obj = {
  [headKey]: {
    value: null,
    prevKey: null,
    nextKey: null,
  },
};

export const listDelete = (x) => {
  const { key } = listSearch(x);
  const findItem = { ...obj[key] };

  if (findItem.prevKey === headKey && findItem.nextKey === headKey) {
    let headItem = { ...obj[headKey] };
    headItem.prevKey = null;
    headItem.nextKey = null;

    obj[headKey] = headItem;
  } else {
    const prevItem = { ...obj[findItem.prevKey] };
    prevItem.nextKey = findItem.nextKey;
    obj[findItem.prevKey] = prevItem;

    const nextItem = { ...obj[findItem.nextKey] };
    nextItem.prevKey = findItem.prevKey;
    obj[findItem.nextKey] = nextItem;
  }

  return obj;
};

export const listInsert = (x) => {
  const newKey = getNewKey();

  let newItem = {
    value: x,
    prevKey: headKey,
    nextKey: null,
  };

  let headItem = { ...obj[headKey] };

  if (headItem.nextKey) {
    let nextItem = { ...obj[headItem.nextKey] };
    nextItem.prevKey = newKey;

    obj[headItem.nextKey] = nextItem;

    newItem.nextKey = headItem.nextKey;
  } else {
    newItem.nextKey = headKey;
  }

  if (!headItem.prevKey) {
    headItem.prevKey = newKey;
  }

  headItem.nextKey = newKey;

  obj[newKey] = newItem;

  obj[headKey] = headItem;

  return obj;
};

export const listSearch = (x) => {
  let itemKey = obj[headKey].nextKey;

  while (obj[itemKey] !== null && obj[itemKey] !== undefined && obj[itemKey].value && obj[itemKey].value !== x) {
    itemKey = obj[itemKey].nextKey;
  }

  return {
    key: itemKey,
    value: obj[itemKey] ? obj[itemKey].value : null,
  };
};

export const get = () => {
  return obj;
};
