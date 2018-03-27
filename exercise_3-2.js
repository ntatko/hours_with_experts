function isEven(a) {
  if(typeof a === 'number'){
    if (a == 0) {
      return true;
    } else if (a == 1) {
      return false;
    } else if (a < 0){
      return isEven(a + 2);
    } else {
      return isEven(a - 2);
    }
  } else {
    throw new Error(a + " is not a number");
  }
}

console.log("is 12 even? " + isEven(12));
console.log("is 11 even? " + isEven(11));
console.log("is -12 even? " + isEven(-12));
console.log("is -11 even? " + isEven(-11));
//console.log("is 'many' even? " + isEven('many'));
//console.log("is Boolean(true) even? " + isEven(true));
