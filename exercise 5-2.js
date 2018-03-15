function average(array) {
  function plus(a, b) { return a + b; } return array.reduce(plus) / array.length;
}

function motherDaughterAgeGap(daughter) {
  if (daughter.mother.born && daughter.sex == "f") { return daughter.mother.born - daughter.born; }
  // how would you abstract-ify this? it seems hardcoded to me.
}

function getAverageDifference(list) {
  var ageGap = [];
  for (var i in list) {
    var gap = motherDaughterAgeGap(i);
    if (typeof gap != 'undefined') { ageGap.push(gap); }
  }
  return average(ageGap);
}
