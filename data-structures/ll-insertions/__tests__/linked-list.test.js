'use strict';

const LinkedList = require('../linked-list.js');

describe('Tests the fuctionality of the extended Inserts class', () => {

  it('Can add a node to the end of the linked list', () => {
    const testTwo = new LinkedList;
    testTwo.insert('3');
    testTwo.insert('2');
    testTwo.append('ONE');
    let str = testTwo.toString(); 
    // console.log('TEST ONE', str);
    expect(str).toEqual('[2] ->[3] ->[ONE] ->null');
  });

  it('Can add multiple nodes to the end of the linked list', () => {
    const testTwo = new LinkedList;
    testTwo.insert('3');
    testTwo.insert('2');
    testTwo.append('TWO');
    testTwo.append('THREE');
    let str = testTwo.toString();
    // console.log('TEST TWO', str);
    expect(str).toBe('[2] ->[3] ->[TWO] ->[THREE] ->null');

  });

  it('Can insert a node before a node located in the middle of linked list', () => {
    const testThree = new LinkedList;
    testThree.insert('S');
    testThree.insert('T');
    testThree.insert('L');
    testThree.insert('S');
    testThree.insert('E');
    testThree.insert('R');
    testThree.insertBefore('U', 'L');
    let str = testThree.toString();
    // console.log('TEST THREE', str);
    expect(str).toBe('[R] ->[E] ->[S] ->[U] ->[L] ->[T] ->[S] ->null');
  });

  it('Can insert a node before the first node of a linked list', () => {
    const testFour = new LinkedList;
    testFour.insert('M');
    testFour.insert('A');
    testFour.insert('E');
    testFour.insertBefore('T', 'E');
    let str = testFour.toString();
    // console.log('TEST FOUR', str);
    expect(str).toBe('[T] ->[E] ->[A] ->[M] ->null');
  });

  it('Can insert after a node in the middle of the linked list', () => {
    const testFive = new LinkedList;
    testFive.insert('Y');
    testFive.insert('T');
    testFive.insert('E');
    testFive.insert('X');
    testFive.insert('N');
    testFive.insert('A');
    testFive.insertAfter('I', 'X');
    let str = testFive.toString();
    // console.log('TEST FIVE', str);
    expect(str).toBe('[A] ->[N] ->[X] ->[I] ->[E] ->[T] ->[Y] ->null');
  });

  it('Can insert a node after the last node of the linked list', () => {
    const testSix = new LinkedList;
    testSix.insert('E');
    testSix.insert('K');
    testSix.insert('I');
    testSix.insert('Y');
    testSix.insertAfter('S','E');
    let str = testSix.toString();
    // console.log('TEST SIX', str);
    expect(str).toBe('[Y] ->[I] ->[K] ->[E] ->[S] ->null');
  });
});

