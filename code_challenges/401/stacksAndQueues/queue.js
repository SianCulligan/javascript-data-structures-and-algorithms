'use strict';

const Node = require ('./node.js')

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  //ADD A NODE TO BACK
  enqueue(val) {
    let nodeToQueue = new Node(val);
    if(this.isempty()) {
      this.front = nodeToQueue;
      this.rear = nodeToQueue;
      return;
    }
    this.rear.next = nodeToQueue;
    this.rear = nodeToQueue;
    return nodeToQueue;
  }

  //DELETE A NODE FROM FRONT
  dequeue () {
    let nodeToDequeue = this.front;
    if (this.isempty()) {
      throw 'Exception';
    }
    this.front = this.front.next;
    nodeToDequeue.next = null;
    this.rear = null;
    return nodeToDequeue;
  }

  //RETURN FRONT OF QUEUE
  peek () {
    if (this.isempty()) {
      throw 'Exception';
    }
    return this.front.val;
  }

  //CHECK TO SEE IF LIST IS EMPTY
  isempty () {
    if(!this.front && !this.rear) {
      return true;
    }else{
      return false;
    }
  }
}


module.exports = Queue;
