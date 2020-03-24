function binarySearch (sortedArr, searchKey) {
  let indexPlacement = '';
  for (let i = 0; i < sortedArr.length; i++) {
    if (searchKey === sortedArr[i]) {
      indexPlacement.push(i);
    }
  }
  if (indexPlacement > 0) {
    return indexPlacement;
  } else {
    return (-1);
  }
}

binarySearch ([11,22,33,44,55,66,77], 90);

module.export = binarySearch;


