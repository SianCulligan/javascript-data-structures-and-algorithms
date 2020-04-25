'use strict';

const mergeLists = require('./ll-merge.js');

let ll1 = ([1,2,3]);

let ll2 = ([4,5,6])

describe('Testing Code Challenge 8 - merge lists function', () => {

  it('Returns 2 linked lists zippered together', () => {
    let results = mergeLists(ll1, ll2);
    // console.log('RESULTS', results);
    expect(results).toBe('[6] ->[3] ->[5] ->[2] ->[4] ->[1] ->null');
  });

  it('can merge a list where the first linked list is longer', () => {
    ll1 = ([1,2,3,4,5]);
    ll2 = ([6,7,8])
    let results = mergeLists(ll1, ll2);
    // console.log('RESULTS', results);
    expect(results).toBe('[5] ->[4] ->[8] ->[3] ->[7] ->[2] ->[6] ->[1] ->null');

  });

  it('can merge a list where the second linked list is longer', () => {
    ll1 = ([8, 9, 10]);
    ll2 = ([11, 12, 13, 14, 15])
    let results = mergeLists(ll1, ll2);
    // console.log('RESULTS', results);
    expect(results).toBe('[15] ->[14] ->[13] ->[10] ->[12] ->[9] ->[11] ->[8] ->null');

  });
});
