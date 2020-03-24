const binarySearch = require('../array-binary-search.js');

describe('Testing array binary search', () => {
  test('It should search an array for a search key and return either the index where the search key exists in the array or -1 ', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual('2');
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual('-1');
  });
});
