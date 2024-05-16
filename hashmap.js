function hash(key, max) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % max;
  }

  return hashCode;
}
class HashMap {
  constructor() {
    this.storage = [];
    this.storagelimit = 5;
  }
  set(key, value) {
    let index = hash(key, this.storagelimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let found = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          found = true;
          break;
        }
      }
      if (!found) {
        this.storage[index].push([key, value]);
      }
    }
  }
  get(key) {
    let index = hash(key, this.storagelimit);
    if (this.storage[index] === undefined) {
      return null;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
  has(key) {
    let index = hash(key, this.storagelimit);
    if (this.storage[index] === undefined) {
      return false;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return true;
        }
      }
    }
  }
  remove(key) {
    let index = hash(key, this.storagelimit);
    if (this.storage[index] === undefined) {
      return false;
    } else if (
      this.storage[index].length === 1 &&
      this.storage[index][0][0] === key
    ) {
      delete this.storage[index];
      return true;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[i][0] === key) {
          delete this.storage[index][i];
          return true;
        }
      }
    }
  }
  length() {
    let count = 0;
    for (let i = 0; i < this.storage.length; i++) {
      for (let j = 0; j < this.storage[i].length; j++) {
        count++;
      }
    }
    return count;
  }
  clear() {
    this.storage = [];
  }
  keys() {
    let mylist = [];
    for (let i = 0; i < this.storage.length; i++) {
      for (let j = 0; j < this.storage[i].length; j++) {
        mylist.push(this.storage[i][j][0]);
      }
    }
    return mylist;
  }
  values() {
    let mylist = [];
    for (let i = 0; i < this.storage.length; i++) {
      for (let j = 0; j < this.storage[i].length; j++) {
        mylist.push(this.storage[i][j][1]);
      }
    }
    return mylist;
  }
  entries() {
    let mylist = [];
    for (let i = 0; i < this.storage.length; i++) {
      for (let j = 0; j < this.storage[i].length; j++) {
        mylist.push(this.storage[i][j]);
      }
    }
    return mylist;
  }
}

const myhash = new HashMap();
myhash.set("quincy", 5);
myhash.set("quinyc", 5);
console.log(myhash.storage);
