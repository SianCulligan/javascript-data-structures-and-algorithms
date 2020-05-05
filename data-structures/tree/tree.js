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
  constructor (root) {
    this.root = null;
  }

  // all are depth first searches, all realate to the root

  //root first
  preOrder () {
    let myTree = new BinaryTree;

    console.log(myTree.val);
    if (myTree.left) {
      preOrder(myTree.left);
      if(myTree.right) {
        preOrder(myTree.right);
      }
    }
  }

  //root middle
  inOrder () {
    let myTree = new BinaryTree;
    if (myTree.left) {
      inOrder(myTree.left);
      console.log(myTree.val);
      if(myTree.right) {
        inOrder(myTree.right);
      }
    }
  }

  //root last
  postOrder () {
    // let myTree = new BinaryTree;
    // if (myTree.left) {
    //   postOrder(myTree.left);
    //   if(myTree.right) {
    //     postOrder(myTree.right);
    //   }
    //   console.log(myTree.val);
    // }
    let output = [];
    const traverse = (Node) => {
      if (!Node) {
        return;
      }
      if (Node.left) {
        traverse(Node.left);
      }
      if (Node.right) {
        traverse(Node.right);
      }
      output.push(Node.value);
    };
    traverse(this.root);
    return output;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor (root) {
    super (root);
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
