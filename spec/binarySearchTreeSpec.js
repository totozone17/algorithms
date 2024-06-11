import { insert, get, inorderTreeWalk, treeSearch, iterativeTreeSearch, treeMinimum, treeMaximum, treeSuccessor, treePredecessor, treeDelete } from "../src/binarySearchTree.js";

describe("[이진 검색 트리]", function () {
  it("이진 검색 트리", function () {
    let result = null;

    insert(50);

    result = get();

    const ROOT = result.root;

    expect(result.tree[ROOT]).toEqual({
      parent: null,
      left: null,
      right: null,
      key: 50,
    });

    insert(15);
    console.log(`@@@ 111 >>> insert(15): `, get());

    insert(62);
    console.log(`@@@ 111 >>> insert(62): `, get());

    insert(80);
    console.log(`@@@ 111 >>> insert(80): `, get());

    insert(7);
    console.log(`@@@ 111 >>> insert(7): `, get());

    insert(54);
    console.log(`@@@ 111 >>> insert(54): `, get());

    insert(11);
    console.log(`@@@ 111 >>> insert(11): `, get());

    inorderTreeWalk(50);

    expect(treeSearch(ROOT, 10)).toEqual(null);

    expect(treeSearch(ROOT, 62)).toEqual(62);

    expect(treeSearch(ROOT, 100)).toEqual(null);

    expect(treeSearch(ROOT, 54)).toEqual(54);

    expect(iterativeTreeSearch(ROOT, 12)).toEqual(null);

    expect(iterativeTreeSearch(ROOT, 54)).toEqual(54);

    expect(iterativeTreeSearch(ROOT, 99)).toEqual(null);

    expect(iterativeTreeSearch(ROOT, 15)).toEqual(15);

    expect(treeMinimum(ROOT)).toEqual(7);

    expect(treeMaximum(ROOT)).toEqual(80);

    expect(treeSuccessor(7)).toEqual(11);
    expect(treeSuccessor(11)).toEqual(15);
    expect(treeSuccessor(15)).toEqual(50);
    expect(treeSuccessor(50)).toEqual(54);
    expect(treeSuccessor(54)).toEqual(62);
    expect(treeSuccessor(62)).toEqual(80);

    expect(treePredecessor(80)).toEqual(62);
    expect(treePredecessor(62)).toEqual(54);
    expect(treePredecessor(54)).toEqual(50);
    expect(treePredecessor(50)).toEqual(15);
    expect(treePredecessor(15)).toEqual(11);
    expect(treePredecessor(11)).toEqual(7);

    treeDelete(11);
    console.log(`@@@ 222 >>> treeDelete(11): `, get());
    treeDelete(50);
    console.log(`@@@ 222 >>> treeDelete(50): `, get());
    treeDelete(62);
    console.log(`@@@ 222 >>> treeDelete(62): `, get());
    treeDelete(15);
    console.log(`@@@ 222 >>> treeDelete(15): `, get());
  });
});
