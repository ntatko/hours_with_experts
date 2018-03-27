function flatten(arr) {
  var newarr = [];
  var emptyarr = [];
  arr.forEach(function(element) {
    newarr = newarr.concat(element);
  });
  return newarr;
}
