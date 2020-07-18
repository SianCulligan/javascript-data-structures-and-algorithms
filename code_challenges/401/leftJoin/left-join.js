'use strict';


function leftJoin (hashtableOne, hashtableTwo) {
  if (!hashtableOne && !hashtableTwo) {
    return 'null';
  }
  let results = [];
  for (let [key, value] of hashtableOne) {
    let join = [];
    console.log('Status of Join: ', join);
    join.push(key, value);
    hashtableTwo.has(key) ? join.push(hashtableTwo.get(key)) : join.push(null);
    //The has() function of the map object accepts a key in string format and returns a boolean value of true if the specified key exists. Otherwise, the function returns false.
    results.push(join);
  }
  return results;
}

module.exports = leftJoin;
