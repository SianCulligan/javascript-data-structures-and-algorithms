'use strict';

class Node {
  constructor (val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  findMaximumValue (root = this.root) {
    if(root === null) {
      return null;
    }
    let rootMax = root.value;
    let leftMax, rightMax;

    if(root.left) leftMax = this.findMaximumValue(root.left);
    if ( this.root.right) rightMax = this.findMaximumValue(root.right);

    let max = rootMax;

    if (leftMax > max) max = leftMax;
    if (rightMax > max) max = rightMax;

    return max;
  }
}


// let tree = new BinaryTree();
// tree.root = new Node(2);
// tree.root.left = new Node(7);
// tree.root.right = new Node(5);
// tree.root.left.left = new Node(2);
// tree.root.left.right = new Node(11);
// tree.root.right.right = new Node(9);

// console.log('SAMPLE TREE', tree.findMaximumValue());

module.exports = { Node, BinaryTree };

