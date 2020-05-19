'use strict';

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'dog');
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 'cat');
  }
}

module.exports = Animal;
