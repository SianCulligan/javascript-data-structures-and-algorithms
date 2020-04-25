'use strict';

class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert (val) {
    try {
      console.log ('Insert function');
      let insertNode = new Node(val);
      insertNode.next = this.head;
      this.head = insertNode;
    } catch (e) {
      console.log(`Error: Insert function`);
    }
    // O(3) >> O(1)
  }

  includes (searchVal) {
    console.log ('Includes function');
    let currentNode = this.head;
    try {
      while(currentNode !== null) {
        console.log('Node is not null its', currentNode.val);
        if(currentNode.val === searchVal) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
      if(currentNode === null) {
        console.log('Node is null');
        return false;
      }
    } catch (e) {
      console.log(`Error: includes function`);
    }
  }

  toString () {
    try {
      console.log ('toString function');
      let currentNode = this.head;
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

module.exports = LinkedList;
