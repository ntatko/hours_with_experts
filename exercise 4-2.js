function reverseArray(arr) {
  if (Array.isArray(arr)) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      newarr.push(arr[arr.length-1-i]);
    }
    return newarr;
  } else {
    console.log(arr + " is not an array");
    return -1;
  }
}

function reverseArrayInPlace(arr) {
  // The book seems to imply that this method isn't correct, but I think this
  // gets the general idea.
  if (Array.isArray(arr)) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      newarr.push(arr[arr.length-1-i]);
    }
    arr = newarr;
    return arr;
  } else {
    console.log(arr + " is Not an array");
    return -1;
  }
}
