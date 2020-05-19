'use strict';

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
  //most of the time, the recurisive solution is simpler for trees

  //root first
  preOrder (root = this.root) {

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
      leftArr = this.inOrder(root.left);
    }
    if (root.right) {
      rightArr = this.inOrder(root.right);
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
      leftArr = this.postOrder(root.left);
    }
    if (root.right) {
      rightArr = this.postOrder(root.right);
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
    // big (OlogN)

    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val > val) {
        if(!currentNode.left) {
          currentNode.left = new Node(val);
          return;
        }
        else currentNode = currentNode.left;
      }

      else if (currentNode.val < val) {
        if(!currentNode.right) {
          currentNode.right = new Node(val);
          return;
        }
        else currentNode = currentNode.right;
      }
      else if (currentNode.val === val) return;
    }
  }

  contains (val) {

    let currentNode = this.root;

    while (currentNode) {
      if(currentNode.val > val) currentNode = currentNode.left;
      else if ( currentNode.val < val) currentNode = currentNode.right;
      else if (currentNode.val === val) return true;
    }
    return false;
  }


}

module.exports = { Node, BinaryTree, BinarySearchTree };
