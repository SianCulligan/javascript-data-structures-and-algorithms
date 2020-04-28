'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    let newNode = new Node(animal);
    if (!this.front && !this.rear) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue(pref) {
    if (!(pref === 'dog' || pref === 'cat')) return null;
    let currentNode = this.front;
    let prevNode = null;
    while (currentNode) {
      let animal = currentNode.val;
      if (animal.species === pref) {
        if (!prevNode) {
          this.front = currentNode.next;
          currentNode.next = null;
          return currentNode;
        }
        prevNode.next = currentNode.next;
        if (!currentNode.next) this.rear = prevNode;
        currentNode.next = null;
        return currentNode;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  toString() {
    let currentNode = this.front;
    let str = '';
    while (currentNode) {
      str +=
                '[ name: ' +
                currentNode.val.name +
                ', species: ' +
                currentNode.val.species +
                '] -> ';
      currentNode = currentNode.next;
    }
    str += 'null';
    return str;
  }
}

module.exports = AnimalShelter;
