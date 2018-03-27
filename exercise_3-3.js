function countBs(a) {
  if (typeof a === 'string') {
    let count = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] == 'B') {
        count++;
      }
    }
    return count;
  } else {
    throw new Error(a + " is not a string");
  }
}

function countChar(a, b) {
  if (typeof a === 'string' && typeof b === 'string' && b.length == 1) {
    let count = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] == b) {
        count++;
      }
    }
    return count;
  } else {
    if (typeof a != 'string' && typeof b != 'string') {
      throw new Error(a + " and " + " are not strings or characters.");
    } else if (typeof a != 'string') {
      throw new Error(a + " is not a string or character");
    } else {
      throw new Error(b + " is not a character");
    }
  }
}

console.log("2 B's in the following: 'BthybthwawB'? " + countBs("BthybthwawB"));
console.log("2 H's in the following: 'HabanahaH'? " + countChar("HabanahaH", "H"));
//console.log("Should throw an error: " + countChar("evening", 3));
//console.log("Should throw an error: " + countChar("things", "th"));
//console.log("should throw an error: " + countBs(true));
