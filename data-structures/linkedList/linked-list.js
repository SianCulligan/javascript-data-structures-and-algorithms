'use strict';

class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }}

class LinkedList {
  constructor(head) {
    this.head = null;
  }

  async insert (val) {
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

  async includes (searchVal) {
    console.log ('Includes function');
    let currentNode = this.head;
    try {
      while(currentNode !== null) {
        console.log('Node is not null');
        if(currentNode === searchVal) {
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

  async toString () {
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

      //{ a } -> { b } -> { c } -> NULL
    } catch (e) {
      console.log(`Error: toString function`);
    }
  }
}
let mylist = new LinkedList();

mylist.toString();

mylist.insert('A');
mylist.toString();

mylist.insert('B');
mylist.toString();
mylist.insert('C');
mylist.toString();

mylist.includes('C');
mylist.includes('D');



class DoublyLinkedList {
  constructor(head, next, prev) {
    this.head = head;
    this.next = next;
    this.prev = prev;
  }

  async insert () {
    try {
      console.log ('DoublyList Insert function');
    } catch (e) {
      console.log(`Error: DoublyList Insert function`);
    }
  }

  async includes () {
    try {
      console.log ('DoublyList Includes function');
    } catch (e) {
      console.log(`Error: DoublyList includes function`);
    }
  }

  async toString () {
    try {
      console.log ('DoublyList toString function');
    } catch (e) {
      console.log(`Error: DoublyList toString function`);
    }
  }
}


let thisList = new Node(2, 3, 1);




module.exports = { Node, LinkedList, DoublyLinkedList };
