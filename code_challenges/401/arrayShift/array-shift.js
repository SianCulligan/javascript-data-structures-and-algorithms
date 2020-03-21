'use strict';

function insertShiftArray (array, newMiddle) {
  let middleIndex = Math.round((array.length/2));
  let newArr = [];
  for (let i = 0; i<array.length; i++) {
    if(i === middleIndex) {
      newArr.push(newMiddle, array[i]);
    } else {
      newArr.push(array[i]);
    }}
  return newArr;
}

insertShiftArray ([1, 2, 3, 4, 5, 6], 5);

module.export = insertShiftArray;


























// let origArr = [1, 2, 3, 4, 5, 6];

//
//   let addedVal = 1111;
//
//   console.log('middle', middleVal);
//   let newArr = [];
//   for (let i = 0; i < origArr.length; i++) {
//     if (i === middleVal) {
//       newArr.push(addedVal)
//     } else {
//       newArr.push(origArr[i])
//     }
//     return newArr;
//   }};

//

// function insertShiftArray () {
//     let value = origArr;
//     let addedVal = 1111;
//     let middleVal = Math.round((value.length/2)-1);
//     origArr.splice(middleVal, 0, addedVal);
//   }

//   insertShiftArray [1, 2, 3, 4, 5, 6];



