// Write a function that accepts a lengthy string parameter.
// Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

'use strict';

function hash(key, size) {
  let sum = 0;
  for (let i in key) sum += key.charCodeAt(i);
  sum *= 599;
  return sum % size;
}


function repeatedWord(str) {
  let splitWords = str.split(/[., -!?]/g);
  let hashTable = new Array(splitWords.length * 5);

  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i] === '') continue;
    let indx = hash(splitWords[i].toLowerCase(), hashTable.length);
    if (hashTable[indx]) {
      let item = hashTable[indx];
      while (item) {
        if (item.key === splitWords[i].toLowerCase()) return item.key;
        item = item.next;
      }

      hashTable[indx] = {
        key: splitWords[i].toLowerCase(),
        next: hashTable[indx],
      };
    } else {
      hashTable[indx] = { key: splitWords[i].toLowerCase() };
    }
  }
  return null;
}

module.exports = repeatedWord;
