class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  let finished = false;
  while (!finished) {
    try {
      return primitiveMultiply(a, b);
      break;
    } catch(err) {
      console.log("nope... this error happened: " + err);
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
