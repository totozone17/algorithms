let rootKey = 0;

// {
//   parent: null,
//   left: null,
//   right: null,
//   key: null,
// }

let tree = {};

export const insert = (insertKey) => {
  let insertItem = {
    parent: null,
    left: null,
    right: null,
    key: insertKey,
  };

  let parentItem = null;
  let _tepmItem = tree[rootKey];

  while (!!_tepmItem) {
    parentItem = _tepmItem;
    if (insertItem.key < _tepmItem.key) {
      _tepmItem = tree[_tepmItem.left];
    } else {
      _tepmItem = tree[_tepmItem.right];
    }
  }

  const hasRootAlready = !!parentItem;
  insertItem.parent = hasRootAlready ? parentItem.key : null;
  if (!hasRootAlready) {
    rootKey = insertItem.key;
    tree[rootKey] = insertItem;
  } else {
    if (insertItem.key < parentItem.key) {
      parentItem.left = insertItem.key;
      tree[insertItem.key] = insertItem;
    } else {
      parentItem.right = insertItem.key;
      tree[insertItem.key] = insertItem;
    }
  }
};

export const get = () => {
  return {
    root: rootKey,
    tree
  }
};

export const inorderTreeWalk = (k) => {
  if (!!tree[k]) {
    inorderTreeWalk(tree[k].left);
    console.log(`inorderTreeWalk: `, k);
    inorderTreeWalk(tree[k].right);
  }
};

export const treeSearch = (x, k) => {
  if (tree[x] === undefined) {
    return null;
  } else if (tree[x].key === k) {
    return tree[x].key;
  } else {
    if (k <= tree[x].key) {
      return treeSearch(tree[x].left, k);
    } else {
      return treeSearch(tree[x].right, k);
    }
  }
};

export const iterativeTreeSearch = (x, k) => {
  while (tree[x] !== undefined && tree[x].key !== k) {
    if (k <= tree[x].key) {
      x = tree[x].left;
    } else {
      x = tree[x].right;
    }
  }

  if (tree[x] === undefined) {
    return null;
  } else {
    return tree[x].key;
  }
};

export const treeMinimum = (x) => {
  let min = x;

  while (tree[x] !== undefined) {
    min = tree[x].key;
    x = tree[x].left;
  }

  return min;
};

export const treeMaximum = (x) => {
  let max = x;

  while (tree[x] !== undefined) {
    max = tree[x].key;
    x = tree[x].right;
  }

  return max;
};

export const treeSuccessor = (x) => {
  if (tree[x] !== undefined && tree[x].right) {
    return treeMinimum(tree[x].right);
  }

  let y = tree[x].parent;

  while (tree[y] !== undefined && tree[y].right === x) {
    x = y;
    y = tree[y].parent;
  }

  return tree[y].key;
};

export const treePredecessor = (x) => {
  if (tree[x] !== undefined && tree[x].left) {
    return treeMaximum(tree[x].left);
  }

  let y = tree[x].parent;

  while (tree[y] !== undefined && tree[y].left === x) {
    x = y;
    y = tree[y].parent;
  }

  return tree[y].key;
};

export const treeDelete = (k) => {
  let y = null;
  if (tree[k].left === null || tree[k].right === null ) {
    y = tree[k].key;
  } else {
    y = treeSuccessor(k);
  }

  let x = null;
  if (tree[y].left !== null) {
    x = tree[y].left;
  } else {
    x = tree[y].right;
  }

  if (x !== null) {
    tree[x].parent = tree[y].parent;
  }

  if (tree[y].parent === null) {
    rootKey = x;
  } else {
    if (tree[tree[y].parent].left === y) {
      tree[tree[y].parent].left = x;
    } else {
      tree[tree[y].parent].right = x;
    }
  }

  if (y !== k) {
    if (tree[k].parent === null) {
      rootKey = y;
    } else {
      if (tree[tree[k].parent].left === k) {
        tree[tree[k].parent].left = y;
      } else {
        tree[tree[k].parent].right = y;
      }
    }

    tree[tree[k].left].parent = y;
    tree[tree[k].right].parent = y;

    tree[y].parent = tree[k].parent;
    tree[y].left = tree[k].left;
    tree[y].right = tree[k].right;
    tree[k] = undefined;
  }
};