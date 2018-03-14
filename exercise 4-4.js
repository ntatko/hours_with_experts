function deepEqual(obj1, obj2) {
  if (obj1 == obj2) {
    return Boolean(1);
  } else {
    if (obj1.value) {
      // obj1 is a list
      if (obj2.value) {
        // obj2 is a list
        let compared = Boolean(true);
        while (obj1.value && obj2.value) {
          if (obj1.value != obj2.value) {
            compared = Boolean(false);
          }
          obj1 = obj1.rest;
          obj2 = obj2.rest;
        }
        return compared;
      } else {
        // obj2 is not a list
        if (Array.isArray(obj2)) {
          let compared = Boolean(true);
          for (let i = 0; i < obj2.length; i++) {
            if (!obj.value) {
              break;
            } else if (obj1.value != obj2[i]) {
              compared = Boolean(false);
            }
            obj1 = obj1.value;
          }
          return compared;
        } else {
          console.log("Hmm. They're not equal? (1)"); //debug only
          return Boolean(false);
        }
      }
    } else {
      if (obj2.value) {
        // obj2 is a list
        if (Array.isArray(obj1)) {
          for (let i = 0; i < obj1.length; i++) {
            if (!obj.value) {
              break;
            }
          }
        } else {
          console.log("Hmm. They're not equal? (2)"); //debug only
          return Boolean(false);
        }

      } else {
        // obj2 is not a list
        // this means they are either both arrays, and thus obj1 == obj2, or obj1 and obj2 are the
        // wrong data types altogether, in which case, they are not equal.
        console.log("Hmm. They're not equal? (3)"); //debug only
        return Boolean(false);
      }
    }
  }
}
