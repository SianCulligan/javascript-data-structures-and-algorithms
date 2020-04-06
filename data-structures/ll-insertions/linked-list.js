'use strict';

class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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

  toString () {
    try {
      console.log ('toString function');
      let currentNode = this.head;
      let str = '';
      while(currentNode !== null) {
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

class Inserts extends LinkedList {
  constructor() {
    super();
  }

  append(newVal) {
    // this.head = null;
    let currentNode = this.head;
    if (!currentNode) {
      this.head = new Node(newVal);
      return;
    }
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(newVal);
    currentNode.next = newNode;
  }

  insertBefore(newVal, beforeVal) {
    // console.log ('insertB4 function');
    let prevCurrentNode = null;
    let currentNode = this.head;

    if (currentNode && currentNode.val === beforeVal){
      // console.log ('insertB4 function IF');
      let newNode = new Node(newVal);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    while (currentNode) {
      // console.log ('insertB4 function WHILE');
      if (currentNode.val === beforeVal) {
        let newNode = new Node(newVal);
        prevCurrentNode.next = newNode;
        newNode.next = currentNode;
        return;
      }
      prevCurrentNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }

  insertAfter(newVal, afterVal) {
    // console.log ('insertAfter function');
    let currentNode = this.head;
    while (currentNode) {
      // console.log ('insertAfter function WHILE');
      if (currentNode.val === afterVal) {
        // console.log ('insertAfter function IF');
        let newNode = new Node(newVal);
        let nextCurrentNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextCurrentNode;
      }
      currentNode = currentNode.next;
    }

    return false;
  }
}

// let myNewList = new Inserts();

// myNewList.insert('h');
// myNewList.insert('u');
// myNewList.insert('n');
// myNewList.toString();
// // myNewList.append('!!!!');
// myNewList.insertAfter('!!!!!!', 'n');
// myNewList.toString();
// myNewList.insertAfter('BEFORE', 'h');
// myNewList.toString();

module.exports = Inserts;
