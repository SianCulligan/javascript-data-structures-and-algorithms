'use strict';

const HashTable = require('../hashtable.js');

describe ('Hashtable tests', () => {
  const map = new HashTable(200);

  it('Adds a key/value to your hash table', () => {
    map.add('dog', 'the best creature');
    expect(map.contains('dog')).toBe(true);
    let indexValue = map.hash('dog');
    expect(map.map[indexValue].val).toEqual('the best creature');
  });

  it('Can handle a collision', () => {
    map.add('god', 'the way it feels when you get code working');
    expect(map.contains('dog')).toBe(true);
    expect(map.contains('god')).toBe(true);
    let indexValue = map.hash('god');
    let indexValueTwo = map.hash('dog');
    expect(indexValue).toBe(indexValueTwo);
    expect(map.map[indexValue].val).toEqual('the best creature');
    expect(map.map[indexValue].next.val).toEqual('the way it feels when you get code working');
  });

  it('Returns null for a key that does not exist', () => {
    expect(map.contains('cat')).toBe(false);
  });

});




