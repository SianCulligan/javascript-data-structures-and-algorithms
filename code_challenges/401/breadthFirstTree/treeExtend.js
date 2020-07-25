'use strict';


class Node {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class QNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue (val) {
    let newNode = new QNode(val);
    if (!this.front && !this.rear) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue () {
    if (!this.front && !this.rear) {
      return;
    }
    let oldFront = this.front;
    this.front = this.front.next;

    oldFront.next = null;
    return oldFront.val;

  }
}


class BinaryTree {
  constructor () {
    this.root = null;
  }

  breadthFirst (root = this.root) {
    let newArr = [];
    if(this.root === null ) {
      return null;
    }

    let newQueue = new Queue();
    newQueue.enqueue(root);

    while (newQueue.front) {
      if(newQueue.front.val.left) {
        newQueue.enqueue(newQueue.front.val.left);
      }
      if(newQueue.front.val.right) {
        newQueue.enqueue(newQueue.front.val.right);
      }
      let removedItem = newQueue.dequeue();
      newArr.push(removedItem.val);
    }
    return newArr;
  }
}



module.exports = { Node, QNode, BinaryTree };
