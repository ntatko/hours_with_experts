function range(start, stop, step = 1) {
  if (typeof start === 'number' && typeof stop === 'number' && typeof step === 'number') {
    let arr = [];
    if (start > stop) {
      for (let i = start; i <= stop; i + step) {
        arr.push(i);
      }
    } else if (start < stop) {
      for (let i = start; i >= stop; i - step) {
        arr.push(i);
      }
    } else {
      arr = [start];
    }
    return arr;
  } else {
    if (typeof start != 'number') {
      console.log("Start value, " + start + ", is not a number.");
    }
    if (typeof stop != 'number') {
      console.log("Stop value, " + stop + ", is not a number.");
    }
    if (typeof step != 'number') {
      console.log("Step value, " + step + ", is not a number.");
    }
    return -1;
  }
}
