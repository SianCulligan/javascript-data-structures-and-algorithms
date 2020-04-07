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







describe('Testing Code Challenge 7 - kth-from-end', () => {

  it('Returns an exception when k is greater than the length of the linked list', () => {
    const testSeven= new LinkedList;
    testSeven.insert('2');
    testSeven.insert('8');
    testSeven.insert('3');
    testSeven.insert('1');
    let str = testSeven.kthFromEnd(6);
    expect(str).toBe('Exception');
  });

  it('Where k and the length of the list are the same', () => {
    const testEight= new LinkedList;
    testEight.insert('2');
    testEight.insert('8');
    testEight.insert('3');
    testEight.insert('1');
    let str = testEight.kthFromEnd(4);
    console.log('TEST EIGHT STR', str);
    expect(str).toBe('Exception');
  });

  it('Where k is not a positive integer', () => {
    const testNine= new LinkedList;
    testNine.insert('2');
    testNine.insert('8');
    testNine.insert('3');
    testNine.insert('1');
    let str = testNine.kthFromEnd(-4);
    console.log('TEST NINE STR', str);
    expect(str).toBe('Exception');
  });

  it('Where the linked list is of a size 1', () => {
    const testTen= new LinkedList;
    testTen.insert('2');
    let str = testTen.kthFromEnd(0);
    console.log('TEST TEN STR', str);
    expect(str).toBe('2');
  });

  it('k is not at the end, but somewhere in the middle of the linked list ', () => {
    const testEleven= new LinkedList;
    testEleven.insert('2');
    testEleven.insert('8');
    testEleven.insert('0');
    testEleven.insert('3');
    testEleven.insert('1');
    let str = testEleven.kthFromEnd(2);
    console.log('TEST Eleven STR', str);
    expect(str).toBe('0');
  });
});
