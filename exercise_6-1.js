class Vec {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x
  }
  get y() {
    return this._y
  }
  plus(vector2) {
    return new Vec(this._x + vector2.x, this._y + vector2.y)
  }
  minus(vector2) {
    return new Vec(this._x - vector2.x, this._y - vector2.y)
  }
  get length() {
    return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2))
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
