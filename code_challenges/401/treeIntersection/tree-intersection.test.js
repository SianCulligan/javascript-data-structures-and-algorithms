'use strict';

const { Node, BinaryTree, BinarySearchTree, treeIntersection } = require('./tree-intersection.js')


describe('Testing the treeIntersection function', () => {
  it('return a set of values found in both trees.', () => {
    let treeOne = new BinarySearchTree(new Node(1, new Node(2, new Node(3))));
    let treeTwo = new BinarySearchTree(new Node(2, new Node(32, new Node(3))));

    expect(treeIntersection(treeOne, treeTwo)).toStrictEqual([2, 3])
  })

  it('returns nothing if a tree is empty', () => {

    let treeOne = new BinarySearchTree(new Node(4, new Node(5, new Node(6))));
    let treeTwo = new BinarySearchTree(new Node());

    expect(treeIntersection(treeOne, treeTwo).toStrictEqual([]);
  })
})
