function isEven(a) {
  if (a == 0) {
    return Boolean(1);
  } else if (a == 1) {
    return Boolean(-0);
  } else if (a < 0){
    isEven(a + 2);
  } else {
    isEven(a - 2);
  }
}
