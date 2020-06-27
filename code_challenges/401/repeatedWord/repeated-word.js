// Write a function that accepts a lengthy string parameter.
// Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

function repeatedWord (string) {
  let max = 0;
  let mostRepeatedWord = '';
  let splitWords = string.split(' ');
  for(let i = 0; i < splitWords.length; i++) {

    let count = 0;
    let word = '';
    for(let j = 0; j < splitWords.length; j++) {
      if(j !== i && splitWords[i] === splitWords[j]) {
        count++;
        word = splitWords[i];
      }
    }

    if (count > mostRepeatedWord) {
      max = count;
      mostRepeatedWord = word;
    }
  }
  return mostRepeatedWord;
}

module.exports = repeatedWord;
