'use strict';

const fizzBuzzTree = require('./fizz-buzz-tree.js').fizzBuzzTree;
const Node = require('./fizz-buzz-tree.js').Node;

let testingTree = new Node(4);
testingTree.left = new Node(3);
testingTree.left.left = new Node(15);
testingTree.left.right = new Node(21);
testingTree.right = new Node(5);
testingTree.right.left = new Node(6);
testingTree.right.right = new Node(10);

describe('Testing functionality of the fizz buzz tree function', () => {
  it('checks if the value is divisible by 3, replace the value with “Fizz”', () => { 
    let newTree = new Node(3);
    console.log('FULL TREE BEFORE', newTree);
    let str = fizzBuzzTree(newTree.val);
    console.log('STR = ', str);
    console.log('FULL TREE AFTER', fizzBuzzTree(newTree));
    expect(str).toEqual('Fizz');
  });







  
//   it('checks if the value is divisible by 5, replace the value with “Buzz”', () => { let myTree = new BinaryTree();
//     myTree.root(20);
//     let str = fizzBuzzTree(myTree);
//     expect(str).toEqual('Buzz');
//   });

//   it('checks if the value is divisible by 3 and 5, replace the value with “FizzBuzz”', () => { let myTree = new BinaryTree();
//     myTree.root(30);
//     let str = fizzBuzzTree(myTree);
//     expect(str).toEqual('FizzBuzz');
//   });

//   it('checks if the value is not divisible by 3 or 5, simply turn the number into a String', () => { let myTree = new BinaryTree();
//     myTree.root(2);
//     let str = fizzBuzzTree(myTree);
//     expect(str).toEqual('2');
//   });
});
