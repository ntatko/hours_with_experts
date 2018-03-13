function reverseArray(arr) {
  if (Array.isArray(arr)) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      newarr.push(arr[arr.length-1-i]);
    }
    return newarr;
  } else {
    throw new Error(arr + " is not an array");
  }
}

function reverseArrayInPlace(arr) {
  // these functions seem identical, and both are equally optimal, but the
  // other one is so much more eloquent.
  if (Array.isArray(arr)) {
    let temparr = arr;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = temparr[temparr.length-1-i];
    }
    return arr;
  } else {
    throw new Error(arr + " is Not an array");
  }
}


console.log("Should be [5,4,3,2,1]: " + reverseArray([1,2,3,4,5]));
console.log("Should be [1,5,2,5,6]: " + reverseArrayInPlace([6,5,2,5,1]));
