function deepEqual(obj1, obj2) {
  if (obj1 == obj2) {
    return Boolean(1);
  } else {
    if (obj1.value) {
      // obj1 is a list
      if (obj2.value) {
        // obj2 is a list
        let compared = Boolean(true);
        while (obj1.rest != null && obj2.rest != null) {
          if (obj1.value != obj2.value) {
            compared = Boolean(false);
          }
          obj1 = obj1.rest;
          obj2 = obj2.rest;
        }
        return compared;
      } else {
        // obj2 is a list
        if (Array.isArray(obj2)) {
          let compared = Boolean(true);
          for (let i = 0; i < obj2.length; i++) {
            if (obj1.value != obj2[i]) {
              compared = Boolean(false);
            }
            obj1 = obj1.value;
          }
          return compared;
        } else {
          console.log("Hmm. They're not equal?");
          return Boolean(false);
        }
      }
    } else {
      if (obj2.value) {
        // obj2 is a list
        if (Array.isArray(obj1)) {
          for (let i = 0; i < obj1.length; i++) {

          }
        } else {
          console.log("Hmm. They're not equal?");
          return Boolean(false);
        }

      } else {
        // obj2 is not a list
        if (Array.isArray(obj2)){

        } else {
          console.log("Hmm. They're not equal?");
          return Boolean(false);
        }
      }
    }
  }
}
