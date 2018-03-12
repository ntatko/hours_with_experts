function countBs(a) {
  if (typeof a === 'string') {
    let count = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] == 'B') {
        count++;
      }
    }
  } else {
    return -1;
  }
}

function countChar(a, b) {
  if (typeof a === 'string' && typeof b === 'string') {
    let count = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] == b) {
        count++;
      }
    }
  } else {
    return -1;
  }
}
