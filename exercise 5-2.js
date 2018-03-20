function average(array) {
  function plus(a, b) { return a + b; } return array.reduce(plus) / array.length;
}

function motherDaughterAgeGap(daughter, mother) {
  if (daughter.mother ==  mother.name) { return mother.born - daughter.born; }
  // how would you abstract-ify this? it seems hardcoded to me.
}

function getAverageDifference(familyArr) {
  var ageGap = [];
  let women = familyArr.filter(function(people) {
    return people.sex === "f";
  })
  women.forEach(function(child) {
    let match = women.find(function(mother) {
      return child.mother === mother.name;
    });
    ageGap.push(motherDaughterAgeGap(child, match));
  });
  return average(ageGap);
}
