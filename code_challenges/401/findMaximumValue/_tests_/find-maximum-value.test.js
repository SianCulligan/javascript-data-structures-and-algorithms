'use strict';

// let {BinaryTree} = require('../treeExtend.js');
const BinaryTree = require('../find-maximum-value.js').BinaryTree;
const Node = require('../find-maximum-value.js').Node;

let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(22);

describe('Tests the fuctionality of max value funciton', () => {
  it('returns the highest value encountered in a binary tree', () => {
    let str = tree.findMaximumValue();
    console.log('RESULTS OF FMV FUNCTION', str);
    expect(str).toStrictEqual(22);
  })

  it('edge case, can traverse an empty tree', () => {
    let nullTree = new BinaryTree();
    let str = nullTree.breadthFirst();
    console.log('SHOULD BE NULL', str);
    expect(str).toEqual(null);
  })
});
