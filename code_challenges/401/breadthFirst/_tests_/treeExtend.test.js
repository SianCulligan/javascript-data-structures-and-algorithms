'use strict';

// let {BinaryTree} = require('../treeExtend.js');
const BinaryTree = require('../treeExtend.js').BinaryTree;
const Node = require('../treeExtend.js').Node;


let testTree = new BinaryTree();
testTree.root = new Node (2);
testTree.root.left = new Node(7);
testTree.root.right = new Node(5);
testTree.root.left.left = new Node(2);
testTree.root.left.right = new Node(6);
testTree.root.right.left = new Node(5);



describe('Tests the fuctionality of breadth first function', () => {
  it('returns a list of the values in the tree in the order they were encountered', () => {
    let str = testTree.breadthFirst();
    // console.log('RESULTS OF BF FUNCTION', str);
    expect(str).toStrictEqual([2, 7, 5 ,2, 6, 5]);
  })

  it('edge case, can traverse an empty tree', () => {
    let nullTree = new BinaryTree();
    let str = nullTree.breadthFirst();
    // console.log('SHOULD BE NULL', str);
    expect(str).toEqual(null);
  })
});
