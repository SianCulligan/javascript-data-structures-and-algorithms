'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');


describe ('happy path', () => {
    it('Can successfully enqueue into a queue', () => {
        let fido = new Animal.Dog('fido');

        AnimalShelter.enqueue(fido)
        console.log('ANIMAL 1', fido);
        console.log('SHELTER', AnimalShelter);
        
        let felix = new Animal.Cat('felix');
        AnimalShelter.enqueue(felix)
        console.log('ANIMAL 2',felix);
        console.log('SHELTER', AnimalShelter);
        expect(listQueue).toBeTruthy;
});

describe ('edge cases', () => {
    it('Calling dequeue or peek on empty queue raises exception', () => {
        let myQueue = new Queue();
    
        expect(myQueue.isempty()).toBeTruthy;
        expect(myQueue.front).toBe(null);
    
        expect(() => {
          myQueue.peek();
        }).toThrow();
        expect(() => {
          myQueue.dequeue();
        }).toThrow();
});

describe ('expected failures', () => {

});
