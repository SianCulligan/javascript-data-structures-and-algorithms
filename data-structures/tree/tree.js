'use strict';

let stack = require('../../code_challenges/401/stacksAndQueues/stacks.js');

let queue = require('../../code_challenges/401/stacksAndQueues/queue.js');

class Node {
  constructor (val, right, left) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  // all are depth first searches, all realate to the root

  //root first
  preOrder (root = this.root) {
    //most of the time, the recurisive solution is simpler for trees
    if (!root) return;

    let rootArr = [];
    let leftArr = [];
    let rightArr = [];

    console.log(root.val);

    rootArr.push(root.val);

    if (root.left) {
      leftArr = this.preOrder(root.left);
    }
    if (root.right) {
      rightArr = this.preOrder(root.right);
    }

    rootArr = [...rootArr, ...leftArr, ...rightArr];

    return rootArr;
  }

  //root middle
  inOrder (root = this.root) {
    if (!root) return;

    let rootArr = [];
    let leftArr = [];
    let rightArr = [];

    rootArr.push(root.val);

    if (root.left) {
      leftArr = this.preOrder(root.left);
    }
    if (root.right) {
      rightArr = this.preOrder(root.right);
    }

    rootArr = [...leftArr, ...rootArr, ...rightArr];

    return rootArr;
  }

  //root last
  postOrder (root = this.root) {
    if (!root) return;

    let rootArr = [];
    let leftArr = [];
    let rightArr = [];

    rootArr.push(root.val);

    if (root.left) {
      leftArr = this.preOrder(root.left);
    }
    if (root.right) {
      rightArr = this.preOrder(root.right);
    }

    rootArr = [...leftArr, ...rightArr, ...rootArr];

    return rootArr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor () {
    super ();
  }

  add (val) {
    try {
      console.log ('Add function');
      let insertNode = new Node(val);
      insertNode.right = this.root;
      this.root = insertNode;
    } catch (e) {
      console.log(`Error: Add function`);
    }
  }

  contains (val) {
    // let myTree = new BinaryTree;
    // myTree.enqueue(val);
    // while (!myTree.isempty()) {
    //   let currentNode = myTree.front;
    //   myTree.dequeue();
    //   if(currentNode.left){
    //     myTree.enqueue(currentNode.left);
    //   }
    //   if(currentNode.right){
    //     myTree.enqueue(currentNode.right);
    //   }
    // }


  }

}

module.exports = { Node, BinaryTree, BinarySearchTree };
