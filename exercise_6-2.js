class Group {
  constructor() {
    this._arr = [];
  }

  add(item) {
    if (this._arr.indexOf(item) === -1) {
      this._arr.push(item);
    }
  }

  delete(item) {
    if (this._arr.indexOf(item) !== -1) {
      delete this._arr[this._arr.indexOf(item)];
    }
  }

  has(item) {
    return this._arr.indexOf(item) !== -1;
  }

  static from(arr) {
    for (var i in arr) {
      this.add(i);
    }
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
