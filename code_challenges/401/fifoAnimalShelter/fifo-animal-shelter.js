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
    let newAnimal = new Node(animal);
    if(this.isempty()) {
      this.front = newAnimal;
      this.rear = newAnimal;
      return;
    }
    this.front.next = newAnimal;
    this.front = newAnimal;
    return newAnimal;
  }

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

  isempty () {
    if(!this.front && !this.rear) {
      return true;
    }else{
      return false;
    }
  }
}


const myList = new AnimalShelter;

myList.enqueue('1');
console.log('LIST', myList);
myList.enqueue('2');
console.log('LIST', myList);
myList.enqueue('3');
console.log('LIST', myList);
myList.enqueue('4');
console.log('LIST', myList);
myList.dequeue();
console.log('LIST', myList);



module.exports = AnimalShelter;
