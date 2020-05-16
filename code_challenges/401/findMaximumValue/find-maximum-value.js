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


let tree = new BinaryTree();
tree.root = new Node(2);
tree.root.left = new Node(7);
tree.root.right = new Node(5);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(11);
tree.root.right.right = new Node(9);

console.log('SAMPLE TREE', tree.findMaximumValue());

//   preOrder (root = this.root) {

//     if (!root) return;

//     let rootArr = [];
//     let leftArr = [];
//     let rightArr = [];

//     console.log(root.val);

//     rootArr.push(root.val);

//     if (root.left) {
//       leftArr = this.preOrder(root.left);
//     }
//     if (root.right) {
//       rightArr = this.preOrder(root.right);
//     }

//     rootArr = [...rootArr, ...leftArr, ...rightArr];

//     return rootArr;
//   }

//   //root middle
//   inOrder (root = this.root) {
//     if (!root) return;

//     let rootArr = [];
//     let leftArr = [];
//     let rightArr = [];

//     rootArr.push(root.val);

//     if (root.left) {
//       leftArr = this.inOrder(root.left);
//     }
//     if (root.right) {
//       rightArr = this.inOrder(root.right);
//     }

//     rootArr = [...leftArr, ...rootArr, ...rightArr];

//     return rootArr;
//   }

//   //root last
//   postOrder (root = this.root) {
//     if (!root) return;

//     let rootArr = [];
//     let leftArr = [];
//     let rightArr = [];

//     rootArr.push(root.val);

//     if (root.left) {
//       leftArr = this.postOrder(root.left);
//     }
//     if (root.right) {
//       rightArr = this.postOrder(root.right);
//     }

//     rootArr = [...leftArr, ...rightArr, ...rootArr];

//     return rootArr;
//   }
// }

// class BinarySearchTree extends BinaryTree {
//   constructor () {
//     super ();
//   }

//   add (val) {
//     // big (OlogN)

//     if (!this.root) {
//       this.root = new Node(val);
//       return;
//     }

//     let currentNode = this.root;

//     while (currentNode) {
//       if (currentNode.val > val) {
//         if(!currentNode.left) {
//           currentNode.left = new Node(val);
//           return;
//         }
//         else currentNode = currentNode.left;
//       }

//       else if (currentNode.val < val) {
//         if(!currentNode.right) {
//           currentNode.right = new Node(val);
//           return;
//         }
//         else currentNode = currentNode.right;
//       }
//       else if (currentNode.val === val) return;
//     }
//   }

//   contains (val) {

//     let currentNode = this.root;

//     while (currentNode) {
//       if(currentNode.val > val) currentNode = currentNode.left;
//       else if ( currentNode.val < val) currentNode = currentNode.right;
//       else if (currentNode.val === val) return true;
//     }
//     return false;
//   }



// }




// console.log('TREE', tree);
// let str = tree.findMaximumValue;
// console.log('RESULTS OF FMV FUNCTION', str);


// module.exports = { Node, BinaryTree, BinarySearchTree };

