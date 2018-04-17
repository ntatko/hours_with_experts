class Array {

//THINGS USEFUL WHEN CONSTRUCTING AN ARRAY

  constructor(num = 0) {
    this._arr = []
    for (let i = 0; i < num; i++) {
      this._arr.push(null)
    }
  }

  init(...beginingElements) {
    for (let j of beginingElements) {
      this._arr.push(j)
    }
    return this._arr
  }

  // METHODS TO RETURN VALUES ABOUT ARRAY

  length() {
    return this._arr.length
  }

  getElement(num) {
    return this._arr[num]
  }

  // METHODS TO MODIFY ARRAY

  zeros(num) {
    this._arr = []
    for (let i = 0; i < num; i++){
      this._arr.push(0)
    }
    return this._arr
  }

  append(...elements) {
    for (let j of elements) {
      this._arr = this._arr.concat(elements)
    }
    return this._arr
  }

  removeIndex(index) {
    if (this._arr[index]) {
      this._arr.splice(index, 1)
    }
    return this._arr
  }

}
