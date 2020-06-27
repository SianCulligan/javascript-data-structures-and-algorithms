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
  let words = str.split(/[., -!?]/g);
  let hashmap = new Array(words.length * 5);

  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') continue;
    let indx = hash(words[i].toLowerCase(), hashmap.length);
    if (hashmap[indx]) {
      let item = hashmap[indx];
      while (item) {
        if (item.key === words[i].toLowerCase()) return item.key;
        item = item.next;
      }

      hashmap[indx] = {
        key: words[i].toLowerCase(),
        next: hashmap[indx],
      };
    } else {
      hashmap[indx] = { key: words[i].toLowerCase() };
    }
  }
  return null;
}

module.exports = repeatedWord;
