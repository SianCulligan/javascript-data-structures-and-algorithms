'use strict';

let Node = require('../tree.js');
let BinaryTree = require('../tree.js');
let BinarySearchTree = require('../tree.js');

describe('Tests the fuctionality of binary tree functions', () => {

  it('can successfully instantiate an empty tree', () => {      
    let myTree = new BinaryTree();
    expect(myTree).toEqual({ root: null })});

  it('can successfully instantiate a tree and add a single root node', () => {
    let myTree = new BinaryTree();
    myTree.root = new Node(1);
    let strRoot = myTree.root.value;
    let strLeft = myTree.left;
    let strRight = myTree.right;
    expect(strRoot).toEqual(1);
    expect(strLeft).toEqual('null');
    expect(strRight).toEqual('null');
  });

  it('can successfully add a left and right child to a single root node', () => {
    let myTree = new BinaryTree;
    myTree.root = new Node(1);
    myTree.root.left = new Node(2);
    myTree.root.right = new Node(3);
    expect(myTree).toBe({ value: 1, left: 2, right: 3 });
  });

  it('can successfully do a preOrder traversal', () => {
    let myTree = new BinaryTree;
    myTree.root = new Node(1);
    myTree.root.left = new Node(2);
    myTree.root.right = new Node(3);
    let newArr = myTree.preOrder();
    expect(newArr).toBe([1, 2, 3]);
  });

  it('can successfully do an inOrder traversal', () => {
    let myTree = new BinaryTree;
    myTree.root = new Node(1);
    myTree.root.left = new Node(2);
    myTree.root.right = new Node(3);
    let newArr = myTree.postOrder();
    expect(newArr).toBe([2, 1, 3]);
  });

  it(' can successfully do a postOrder traversal', () => {
    let myTree = new BinaryTree;
    myTree.root = new Node(1);
    myTree.root.left = new Node(2);
    myTree.root.right = new Node(3);
    let newArr = myTree.postOrder();
    expect(newArr).toBe([2, 3, 1]);
  });

  it('can successfully add a value to a binary search tree', () => {
    let myTree = new BinarySearchTree;
    myTree.root = new Node(15);
    myTree.root.left = new Node(8);
    myTree.root.left.left = new Node(4);
    myTree.root.left.right = new Node(12);
    myTree.root.right = new Node(20);
    myTree.root.right.right = new Node(22);
    
    myTree.add(6);
    myTree.add(14);
    myTree.add(19);
    myTree.add(16);

  });

  it('can search a binary search tree for a value and get the correct true/false result', () => {});

});
