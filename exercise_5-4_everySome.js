function every(arr, searchFor) {
  var check = true;
  arr.forEach(function(iter) {
    if (iter != searchFor) {
      check = false;
    }
  });
  return check;
}

function some(arr, searchFor) {
  var check = false;
  arr.forEach(function(iter) {
    if(iter === searchFor) {
      check = true;
    }
  });
  return check;
}
