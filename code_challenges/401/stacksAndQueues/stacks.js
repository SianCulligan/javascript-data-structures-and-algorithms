'use strict';

const Node = require ('./node.js')

class Stack {
  constructor() {
    this.top = null;
  }

  push (value) {
    let nodeToPush = new Node(value)
    if(this.isempty()){
      this.top = nodeToPush;
      return;
    }
    nodeToPush.next = this.top;
    this.top = nodeToPush;
    return nodeToPush;
  }

  pop () {
    let nodeToPop = this.top;
    if (this.isempty()) {
      throw 'Exception';
    }

    this.top = this.top.next;
    nodeToPop.next = null;
    return nodeToPop;
  }

  peek () {
    if (this.top) return this.top.val;
    throw 'Exception';
  }

  isempty () {
    if (!this.top) return true;
    return false;
  }
}


module.exports = Stack;
