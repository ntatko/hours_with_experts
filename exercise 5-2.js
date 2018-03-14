function average(array) {
  function plus(a, b) { return a + b; } return array.reduce(plus) / array.length;
}

function motherDaughterAgeGap(daughter) {
  if (daughter.mother.born && daughter.sex == "f") {
    var ageDifference = daughter.mother.born - daughter.born;
    return ageDifference;
  } else {
    return;
  }
}

function getAverageDifference(daughtersObjectList) {
  var ageGap = [];
  for (var person in daughterObjectList) {
    var gap = motherDaughterAgeGap(person);
    if (typeof gap != 'undefined') {
      ageGap.push(gap);
    }
  }
  return average(ageGap);
}
