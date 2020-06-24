'use strict';

const HashTable = require('../hashtable.js');

describe ('Hashtable tests', () => {
  const map = new HashTable(200);

  it('Adds a key/value to your hash table', () => {
    map.add('dog', 'the best creature');
    expect(map.contains('dog')).toBe(true);
    let ind = map.hash('dog');
    expect(map.map[ind].val).toEqual('the best creature');
  });

  it('Can handle a collision', () => {
    map.add('god', 'the way it feels when you get code working');
    expect(map.contains('dog')).toBe(true);
    expect(map.contains('god')).toBe(true);
    let ind = map.hash('god');
    let indTwo = map.hash('dog');
    expect(ind).toBe(indTwo);
    expect(map.map[ind].val).toEqual('the best creature');
    expect(map.map[ind].next.val).toEqual('the way it feels when you get code working');
  });

  it('Returns null for a key that does not exist', () => {
    expect(map.contains('cat')).toBe(false);
  });

});




