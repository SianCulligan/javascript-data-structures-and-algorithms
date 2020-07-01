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

  // all are depth first searches, all relate to the root

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

const treeIntersection = (treeOne, treeTwo) => {
//check to ensure neither tree is empty.
  if (!treeOne.root || !treeTwo.root) {
    return;
  }

  //search both trees
  let searchTree = treeOne.preOrder(treeOne.root)
  let searchTreeTwo = treeTwo.preOrder(treeTwo.root)

  //return matching values with somthing like .filter before pushing to array? this is where I get totally stuck - i cannot figure this part out - send haaaalp!
  let newArr = [];
  for(let i = 0; i < searchTree.length; i++) {
    let current = searchTree[i];
    for(let j = 0; j < searchTreeTwo.length; j++) {
      if (searchTreeTwo[i] === current) {
        newArr.push(searchTree[i]
        )}
    }}
  return newArr;
}

module.exports = { Node, BinaryTree, BinarySearchTree, treeIntersection };
