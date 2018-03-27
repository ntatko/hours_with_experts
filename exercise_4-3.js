function arrayToList(arr) {
  if (Array.isArray(arr)) {
    let list = {};
    for (let i = arr.length-1; i >= 0; i--) {
      list = {value: arr[i], rest: list};
    }
    return list;
  } else {
    throw new Error(arr + " is not an array.");
  }
}

function listToArray(list) {
  if (typeof list === 'object' && !Array.isArray(list) && list != null) {
    let arr = [];
    while (list.value != null) {
      arr.push(list.value);
      list = list.rest;
    }
    return arr;
  } else {
    throw new Error(list + " is not a list.");
  }
}

function prepend(val, list) {
  list = {value: val, rest: list};
  return list;
}

function nth(val, list) {
  if (list.rest == null) {
    list.rest = {value: val, rest: null};
    return list;
  } else {
    nth(val, list.rest);
    return list;
  }
}
