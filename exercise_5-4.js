function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function getMax(arr) {
  let max = 0;
  var value = '';
  let invals = arr.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
  for (let i of invals) {
    let currCount = arr.filter(function(element) {return element === i;}).length;
    if (currCount > max) {
      max = currCount;
      value = i;
    }
  }
  return value;
}


function dominantDirection(text) {
  var chars = [];
  for (let i = 0; i < text.length; i++) {
	chars.push(characterScript(text.charCodeAt(i)).direction);
  }
  return getMax(chars);
}

console.log(dominantDirection("Hello"));
// → ltr
console.log(dominantDirection("Heyمساءالخي"));
// → rtl
