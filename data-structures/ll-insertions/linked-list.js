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

  includes (searchVal) {
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

  append(value) {
    let currentNode = this.head;
    try {
      console.log ('append function');
      console.log ('Set node', currentNode);
      while(currentNode === null) {
        console.log('Node is not null its', currentNode.val);
        currentNode = currentNode.next;
      }
      mylist.insert(value);
    } catch (e) {
      console.log(`Error: append function`);
    }
  }

  insertBefore(value, newVal) {
    let currentNode = this.head;
    console.log('currentNode', currentNode);

    try {
      const insertNodeBefore = new Node(newVal);
      console.log('new node', insertNodeBefore);

      while(currentNode.next !== null) {
        if(currentNode.value === value) {
          let previousNode = currentNode.prev;

          if (previousNode === null) {
            this.head = insertNodeBefore;
            insertNodeBefore.next = currentNode;
            currentNode.prev = insertNodeBefore;
            insertNodeBefore.prev = null;
          } else {
            previousNode.next = insertNodeBefore;
            insertNodeBefore.next = currentNode;
            currentNode.prev = insertNodeBefore;
            insertNodeBefore.prev = previousNode;
          }
        }
        currentNode = currentNode.next;
      }
    } catch (e) {
      console.log(`Error: insertBefore function`);
    }
  }

  insertAfter(value, newVal) {
    let currentNode = this.head;
    console.log('currentNode', currentNode);

    try {
      const insertNodeAfter = new Node(newVal);
      console.log('new node', insertNodeAfter);

      while(currentNode.next !== null) {
        if(currentNode.value === value) {
          let otherNode = currentNode.next;
          if (otherNode === null) {
            currentNode.next = insertNodeAfter;
            insertNodeAfter.prev = currentNode;
            insertNodeAfter.next = null;
          } else {
            currentNode.next = insertNodeAfter;
            insertNodeAfter.prev = currentNode;
            insertNodeAfter.next = otherNode;
            otherNode.prev = insertNodeAfter;
          }
        }
        currentNode = currentNode.next;
      }
    } catch (e) {
      console.log(`Error: insertAfter function`);
    }
  }
}


// let myNewList = new Inserts();

// myNewList.insert('h');
// myNewList.insert('u');
// myNewList.insert('n');
// myNewList.toString();
// myNewList.append('!!!!');
// myNewList.toString();






let mylist = new Inserts();


//insert & print to screen
mylist.toString();
mylist.insert('A');
mylist.toString();
mylist.insert('B');
mylist.toString();
mylist.insert('C');
mylist.toString();
// mylist.append('You rang?');
mylist.insertBefore('C','You rang?');
mylist.toString();

// //search the array, 1st should be true, 2nd false
// mylist.includes('C');
// mylist.includes('D');

module.exports = Inserts;
