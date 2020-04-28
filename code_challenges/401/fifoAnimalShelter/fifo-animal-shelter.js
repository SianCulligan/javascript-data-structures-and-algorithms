'use strict';

// const Animal = require('./animal.js');

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
    if(!this.front && !this.rear){
      this.front = newNode;
      this.rear = newNode;
      return;
    }

    // if (this.front === this.rear) {
    //   this.rear = newNode;
    //   this.front.necxt = newNode;
    // }

    // let tempRear = this.rear;

    this.rear.next = newNode;
    this.rear = newNode

    // if(this.isempty()) {
    //   this.front = newAnimal;
    //   this.rear = newAnimal;
    //   return;
    // }
    // this.rear.next = newAnimal;
    // this.rear = newAnimal;
    // return newAnimal;
  }

  dequeue (pref) {
    //traversal is always O(n)
    //start @ front, traverse until
    if (!pref === 'dog' || !pref ==='cat' ) return null;

    let currentNode = this.front;
    let prevNode = null;


    while (currentNode) {
      let animal = currentNode.val;

      if (animal.species === pref) {
        if (!prevNode) {
          let dequeuedNode = currentNode;
          this.front = currentNode.next;
          dequeuedNode.next = null;
          return currentNode;
        }
        prevNode.next = currentNode.next;

        if(!currentNode.next)
          this.rear = prevNode;

        currentNode.next = null;
        return currentNode;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

//   isempty () {
//     if(!this.front && !this.rear) {
//       return true;
//     }else{
//       return false;
//     }
//   }
}


// const myList = new AnimalShelter;

// myList.enqueue('1');
// console.log('LIST', myList);
// myList.enqueue('2');
// console.log('LIST', myList);
// myList.enqueue('3');
// console.log('LIST', myList);
// myList.enqueue('4');
// console.log('LIST', myList);
// myList.dequeue();
// console.log('LIST', myList);

// let fido = new Dog('fido');
// AnimalShelter.enqueue(fido)
// console.log(fido);
// console.log('SHELTER', AnimalShelter);

// let felix = new Cat('felix');
// AnimalShelter.enqueue(felix)
// console.log(felix);
// console.log('SHELTER', AnimalShelter);

module.exports = AnimalShelter;
