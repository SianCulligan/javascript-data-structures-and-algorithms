'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');
const Animal = require('./animal.js');


describe ('happy path', () => {
  it('Can successfully enqueue into a queue', () => {
    let fido = new Animal('fido');
    let list = new AnimalShelter;

    list.enqueue(fido);
    console.log('LIST',list)
    console.log('FIDO',fido)
    expect(list).toBeTruthy;
  });

  // describe ('edge cases', () => {
  //     it('Calling dequeue or peek on empty queue raises exception', () => {
  //         let myQueue = new Queue();

  //         expect(myQueue.isempty()).toBeTruthy;
  //         expect(myQueue.front).toBe(null);

  //         expect(() => {
  //           myQueue.peek();
  //         }).toThrow();
  //         expect(() => {
  //           myQueue.dequeue();
  //         }).toThrow();
  // });

  // describe ('expected failures', () => {

});
