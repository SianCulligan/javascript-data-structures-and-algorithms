'use strict';

function leftJoin (hashtableOne, hashtableTwo) {
  if (!hashtableOne.size && !hashtableTwo.size) {
    return [];
  }
  let results = [];
  for (let [key, value] of hashtableOne) {
    let join = [];
    console.log('Status of Join: ', join);
    join.push(key, value);
    hashtableTwo.has(key) ? join.push(hashtableTwo.get(key)) : join.push(null);
    results.push(join);
  }
  return results;
}

module.exports = leftJoin;
