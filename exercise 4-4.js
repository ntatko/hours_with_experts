function deepEqual(obj1, obj2) {
  if (obj1 !== null && obj2 !== null && typeof obj1 !== 'object') {
    // obj1 and obj2 are not objects and not null

    return obj1 === obj2;

  } else if (obj1 === null) {
    // at least obj1 or obj2 is null

    return obj1 === null && obj2 === null;

  } else { //if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null){
    //KNOWN: obj1 and obj2 are both not-null objects

    for (let key in obj1) {
      return deepEqual(obj1[key], obj2[key])
    }
  }
}
