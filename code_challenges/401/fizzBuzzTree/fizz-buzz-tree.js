'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  toString () {
    try {
      console.log ('toString function');
      let currentNode = this.root;
      let str = '';
      while(currentNode) {
        str +='[' + currentNode.val + '] ->';
        currentNode = currentNode.next;
      }
      str += 'null';
      console.log(str);
      return str;
    } catch (e) {
      console.log(`Error: toString function`);
    }
  }

}

//turn fizzBuzzHelper into a tree
function fizzBuzzTree (tree) {
  let newTree = new BinaryTree();
  //helper function to traverse the tree
  traverse (tree)
  return newTree
}

// Recursive helper function
function traverse (node) {
  if (node.left) {
    this.traverse(node.left)
    fizzBuzzHelper(node.val)
  } else if (node.right) {
    this.traverse(node.right)
  }
  this.traverse(this.root)
}


function fizzBuzzHelper (node) {
  // edge case
  if(node === null) {
    return null
  }
  // check for both 3 & 5
  if (node.val % 15 === 0) {
    new Node ('FizzBuzz')
  }
  // check for 3
  if(node.val % 3 === 0) {
    new Node ('Fizz')
  }
  // check for 5
  if (node.val % 5 === 0) {
    new Node ('Buzz')
  }
  // check if value is not divisible by either
  if(node.val % 3 !== 0 && node.val % 5 !==0) {
    new Node(node.val.toString())
  }
}


module.exports= { BinaryTree, fizzBuzzTree };
