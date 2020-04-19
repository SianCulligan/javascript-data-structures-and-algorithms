'use strict';

const Queue = require('./queue.js');










describe('queue operations', () => {
  it('Can successfully enqueue into a queue', () => {
    let myQueue = new Queue();
    myQueue.enqueue('red');

    let listQueue = myQueue.isempty();
    expect(listQueue).toBeFalsy;

    let listRed = myQueue.peek()
    expect(listRed).toBe('red');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let myQueue = new Queue();
    myQueue.enqueue('red');
    myQueue.enqueue('orange');
    myQueue.enqueue('green');
    myQueue.enqueue('blue');

    let listQueue = myQueue.isempty();
    expect(listQueue).toBeFalsy;

    let frontOfLine = myQueue.peek()
    expect(frontOfLine).toBe('red');

    let backOfLine = myQueue.rear.val;
    expect(backOfLine).toBe('blue');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let myQueue = new Queue();
    myQueue.enqueue('red');
    myQueue.enqueue('orange');

    let listQueue = myQueue.isempty();
    expect(listQueue).toBeFalsy;

    let peek = myQueue.peek();
    expect(peek).toBe('red');

    let dequeuedNode = myQueue.dequeue();

    expect(dequeuedNode.val).toBe('red');
    expect(myQueue.peek()).toBe('orange');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let myQueue = new Queue();
    myQueue.enqueue('yellow');
    myQueue.enqueue('blue');
    myQueue.enqueue('green');
    
    expect(myQueue.peek()).toBe('yellow');
  });

  it('Can successfully instantiate an empty queue', () => {
    let myQueue = new Queue();

    let shouldBeTrue = myQueue.isempty();
    let shouldBeNull = myQueue.front;
    expect(shouldBeTrue).toBeTruthy;
    expect(shouldBeNull).toBe(null);
  });


  it('Can successfully empty a queue after multiple dequeues', () => {
    let myQueue = new Queue();
    myQueue.enqueue('One');
    myQueue.enqueue('Two');
    myQueue.enqueue('Three');
    myQueue.enqueue('Four');
    
    let listQueue = myQueue.isempty();
    expect(listQueue).toBeFalsy;

    myQueue.dequeue('One');
    myQueue.dequeue('Two');
    myQueue.dequeue('Three');
    myQueue.dequeue('Four');

    listQueue = myQueue.isempty();
    expect(listQueue).toBeTruthy;

  });

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
});
