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
        console.log('Node is not null its', currentNode.val);
        if(currentNode.val === searchVal) {
        //   return (console.log('true'));
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
      if(currentNode === null) {
        console.log('Node is null');
        // return (console.log('false'));
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
      return str;
    } catch (e) {
      console.log(`Error: toString function`);
    }
  }
}
let mylist = new LinkedList();

// //insert & print to screen
// mylist.toString();
// mylist.insert('A');
// mylist.toString();
// mylist.insert('B');
// mylist.toString();
// mylist.insert('C');
// mylist.toString();

// //search the array, 1st should be true, 2nd false
// mylist.includes('C');
// mylist.includes('D');

module.exports = LinkedList;
