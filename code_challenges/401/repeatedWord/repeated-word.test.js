// INPUT
// "Once upon a time, there was a brave princess who..."

//OUTPUT
//a


'use strict';

const repeatedWord = require('./repeated-word.js');

describe('Testing repeated word', () => {
  test('happy path ', () => {
    let str = repeatedWord('Once upon a time, there was a brave princess who...');
    expect(str).toBe('a');
  });
  test('expected failure ', () => {
    expect(repeatedWord('769532')).toBeFalsey;
  });
});
