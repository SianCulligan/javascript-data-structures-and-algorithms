'use strict';

// let {BinaryTree} = require('../treeExtend.js');
let {BinarySearchTree} = require('../treeExtend.js');

const testTree = new BinarySearchTree();
testTree.add(2);
testTree.add(7);
testTree.add(5);
testTree.add(2);
testTree.add(6);
testTree.add(5);
testTree.add(11);
testTree.add(5);
testTree.add(9);
testTree.add(4);


describe('Tests the fuctionality of breadth first function', () => {
  it('returns a list of the values in the tree in the order they were encountered', () => {
    let str = testTree.breadthFirst();
    // console.log('RESULTS OF BF FUNCTION', str);
    expect(str).toBe([2, 7, 5 ,2, 6, 5, 11, 5, 9, 4]);
  })

  it('edge case, can traverse an empty tree', () => {
    let nullTree = new BinarySearchTree();
    let str = nullTree.breadthFirst();
    // console.log('SHOULD BE NULL', str);
    expect(str).toEqual(null);
  })
});
