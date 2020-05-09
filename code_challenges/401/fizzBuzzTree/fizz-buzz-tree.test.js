'use strict';

const BinaryTree = require('./fizz-buzz-tree.js')
const fizzBuzzTree = require('./fizz-buzz-tree.js');

describe('Testing functionality of the fizz buzz tree function', () => {
  it('checks if the value is divisible by 3, replace the value with “Fizz”', () => { let myTree = new BinaryTree();
    myTree.root(3);
    let str = fizzBuzzTree(myTree);
    expect(str).toEqual('Fizz');
  });

  it('checks if the value is divisible by 5, replace the value with “Buzz”', () => { let myTree = new BinaryTree();
    myTree.root(20);
    let str = fizzBuzzTree(myTree);
    expect(str).toEqual('Buzz');
  });

  it('checks if the value is divisible by 3 and 5, replace the value with “FizzBuzz”', () => { let myTree = new BinaryTree();
    myTree.root(30);
    let str = fizzBuzzTree(myTree);
    expect(str).toEqual('FizzBuzz');
  });

  it('checks if the value is not divisible by 3 or 5, simply turn the number into a String', () => { let myTree = new BinaryTree();
    myTree.root(2);
    let str = fizzBuzzTree(myTree);
    expect(str).toEqual('2');
  });
});
