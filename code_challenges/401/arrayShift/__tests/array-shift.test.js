'use strict';

const insertShiftArray = require('../array-shift.js');

// testing page

describe('Testing insertShiftArray Function', () => {
  test('It should add a value to the middle of an original array', () => {
    const someArrays = [
      [2, 4, 6, 8],
      [4, 8, 15, 23, 42]
    ];
    expect(insertShiftArray(someArrays, '5')).toStrictEqual(true);
    expect(insertShiftArray(someArrays, '16')).toStrictEqual(true);
  });
});
