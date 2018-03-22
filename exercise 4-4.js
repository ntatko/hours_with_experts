function deepEqual(obj1, obj2) {
  if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 !== null && obj2 !== null){
    //KNOWN: obj1 and obj2 are both not-null objects

    Object.keys(obj1).forEach(function(key1) {
      Object.keys(obj2).forEach(function(key2) {
        if (deepEqual(key1, key2)) {
          if (deepEqual(obj1.key1, obj2.key2)) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
    });


  } else {
    if (obj1 !== null && obj2 !== null) {
      // obj1 and obj2 are not objects and not null

      if (obj1 === obj2) {
        return true;
      } else {
        return false;
      }

    } else {
      // at least obj1 or obj2 is null

      if (obj1 === null && obj2 === null) {
        return true;
      } else {
        return false;
      }

    }
  }
}
