'use strict';


class HashTable {
  constructor(initialSize) {
    this.map = new Array(initialSize);
  }

  add (key, value) {
    let addIndex = this.hash(key);

    //build a check to avoid collisions
    if (this.map[addIndex]) {
      let current = this.map[addIndex];


      while(current.next) {
        if (current.key === key) {
          if (current.val === value) {
            return;
          }
          if (current.val.length) {
            current.val.push(value);
          } else {
            current.val = [current.val, value];
          }
          return;
        }
        current = current.next;
      }
      current.next = {
        key: key,
        val: value,
      };
    }

    else
      this.map[addIndex] = {
        key: key,
        val: value,
      }
  }

  get (key) {
    let ind = this.hash(key);

    if(this.map[ind]) {
      let current = this.map[ind]

      while (current) {
        if(current.key === key) return current.val;
        current = current.next;
      }
    }
    return null;
  }

  contains (key) {
    let val = this.get(key);
    if(!val) return false;
    else return true;
  }

  hash (key) {
    let sum = 0;
    for (let i = 0; i < key.lenth; i++) {
      sum += key.charCodeAt(i);
    }
    sum *= 599;
    sum %= this.map.length;
    return sum;
  }
}

module.exports = HashTable;