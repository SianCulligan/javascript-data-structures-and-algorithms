'use strict';

const LinkedList = require('../linked-list.js');

describe('Tests the fuctionality of the linked list', () => {

  it('can successfully instantiate an empty list', () => {
    const testOne = new LinkedList;
    expect(testOne).toBeInstanceOf(LinkedList);
    expect(testOne.head).toBeNull();
  });

  it('can properly insert a value into the list', () => {
    let testTwo = new LinkedList;
    testTwo.insert('A');
    let str ='[' + testTwo.head.val + '] ->' + testTwo.head.next;
    expect(str).toBe('[A] ->null');
  });


  it('LinkedList head property will correctly point to the beginning of the list', () => {
    let testThree = new LinkedList;
    testThree.insert('A');
    expect(testThree.head.val).toBe('A');
  });

  it('insert multiple Nodes into the list successfully', () => {
    let testFour = new LinkedList;
    //insert 2
    testFour.insert('Y');
    testFour.insert('X');
    //find 2
    let findY = testFour.includes('Y');
    let findX = testFour.includes('X');
    //test 2
    expect(findY).toBeTruthy;
    expect(findX).toBeTruthy;
  });

  it('includes() function correctly finds a value in the list that exists', () => {
    let testFive = new LinkedList;
    testFive.insert('FindMe');
    let str = testFive.includes('FindMe');

    expect(str).toBeTruthy;

  });

  it('includes() function correctly returns false when a value is not in the list', () => {
    let testSix = new LinkedList;
    testSix.insert('FindMe');
    let secondStr = testSix.includes('doesNotExist');
    expect(secondStr).toBeFalsey;

  });

  it('checks the toString() function prints out your LinkedList in an expected way', () => {
    let testSeven = new LinkedList;
    testSeven.insert('A');
    testSeven.insert('B');
    let str = testSeven.toString();
    console.log('Test 7', str);
    //Something is off with my toString function - keeps returning a Promise {}, check console log
    expect(str).toBe('[B] ->[A] ->null');
  });

});
