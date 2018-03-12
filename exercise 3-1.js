function min(a, b) {
  if (typeof a === 'number' && typeof b === 'number'){
    if (a > b) {
      return b;
    } else {
      return a;
    }
  } else {
    console.log("Not a number");
    return -1;
  }
}
