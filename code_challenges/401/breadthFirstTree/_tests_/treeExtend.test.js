'use strict';

// let {BinaryTree} = require('../treeExtend.js');
const BinaryTree = require('../treeExtend.js').BinaryTree;
const Node = require('../treeExtend.js').Node;

let tree = new BinaryTree();
tree.root = new Node('A');
tree.root.left = new Node('B');
tree.root.right = new Node('C');
tree.root.left.left = new Node('D');
tree.root.left.right = new Node('E');
tree.root.right.left = new Node('F');

describe('Tests the fuctionality of breadth first function', () => {
  it('returns a list of the values in the tree in the order they were encountered', () => {
    let str = tree.breadthFirst();
    console.log('RESULTS OF BF FUNCTION', str);
    expect(str).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  })

  it('edge case, can traverse an empty tree', () => {
    let nullTree = new BinaryTree();
    let str = nullTree.breadthFirst();
    console.log('SHOULD BE NULL', str);
    expect(str).toEqual(null);
  })
});
