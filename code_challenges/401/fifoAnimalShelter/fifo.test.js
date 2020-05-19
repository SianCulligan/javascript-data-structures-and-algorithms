'use strict';


const AnimalShelter = require('./fifo-animal-shelter.js');
const Animal = require('./animals.js');



describe('happy path', () => {
  it('Can successfully enqueue', () => {
    let littleton = new Animal.Dog('littleton');
    let newShelter = new AnimalShelter;
    newShelter.enqueue(littleton);
    let str = newShelter.front.val.name;
    expect(str).toBe('littleton');
  });

  it('Can enqueue multiple pets', () => {
    let littleton = new Animal.Dog('littleton');
    let marvel = new Animal.Dog('marvel');
    let stormageddon = new Animal.Cat('stormageddon');
    let newShelter = new AnimalShelter;
    newShelter.enqueue(littleton);
    newShelter.enqueue(stormageddon);
    newShelter.enqueue(marvel);
    let str = newShelter.front.val.name;
    let strTwo = newShelter.rear.val.name;
    let strThree = newShelter.front.next.val.name;
    expect(str).toBe('littleton');
    expect(strTwo).toBe('marvel');
    expect(strThree).toBe('stormageddon');
  });

  it('Can successfully dequeue', () => {
    let littleton = new Animal.Dog('littleton');
    let marvel = new Animal.Dog('marvel');
    let stormageddon = new Animal.Dog('stormageddon');
    let woodrow = new Animal.Cat ('woodrow');
    let newShelter = new AnimalShelter;

    newShelter.enqueue(littleton);
    newShelter.enqueue(stormageddon);
    newShelter.enqueue(marvel);
    newShelter.enqueue(woodrow);
    expect(newShelter.toString()).toBe('[ name: littleton, species: dog] -> [ name: stormageddon, species: dog] -> [ name: marvel, species: dog] -> [ name: woodrow, species: cat] -> null');

    newShelter.dequeue('cat');

    expect(newShelter.toString()).toBe('[ name: littleton, species: dog] -> [ name: stormageddon, species: dog] -> [ name: marvel, species: dog] -> null');
  });
});

describe('edge cases', () => {
  it('Does not break if shelter is empty', () => {
    let newShelter = new AnimalShelter;
    console.log('WHATS THIS', newShelter.front);
    expect(newShelter.front).toBe(null);
  });
});
