// Just for the record, I protest having a range function which includes the last number.
// Any proper range function will fail to include the last number.

function range(start, stop, step = 1) {
  if (typeof start === 'number' && typeof stop === 'number' && typeof step === 'number') {
    let arr = [];
    if (start < stop) {
      for (let i = start; i <= stop; i += step) {
        arr.push(i);
      }
    } else if (start > stop) {
      if (step > 0) {
        step = -step;
      }
      for (let i = start; i >= stop; i += step) {
        arr.push(i);
      }
    } else {
      arr = [start];
    }
    return arr;
  } else {
    if (typeof start != 'number') {
      throw new Error("Start value, " + start + ", is not a number.");
    }
    if (typeof stop != 'number') {
      throw new Error("Stop value, " + stop + ", is not a number.");
    }
    if (typeof step != 'number') {
      throw new Error("Step value, " + step + ", is not a number.");
    }
  }
}

console.log("Should be [2,3,4,5,6,7,8]: " + range(2, 8));
console.log("Should be [1,3,5,7]: " + range(1,8,2));
console.log("Should be [8,7,6,5,4]: " + range(8, 4));
console.log("Should be [9, 6, 3, -3]: " + range(9, -4, -3));
console.log("Should be [12]: " + range(12, 12, 12));
