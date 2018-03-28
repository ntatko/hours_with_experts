class Group {
  constructor() {
    this._arr = new Array();
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

  from(arr) {
    for (let i of arr) {
      this.add(i);
    }
    return arr; // -OR- return this._arr;
  }
}

let group = new Group();
for (let value of group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
