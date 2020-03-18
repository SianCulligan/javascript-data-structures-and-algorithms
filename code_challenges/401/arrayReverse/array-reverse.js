'use strict';

function reverseArray(array) {
  let resultArray = [];
  for(let i = array.length-1; i>=0; i--) {
    resultArray.push(array[i]);
  }
  return resultArray;
}

reverseArray([1, 2, 3, 4]);
