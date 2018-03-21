function average(array) {
  function plus(a, b) { return a + b; } return array.reduce(plus) / array.length;
}

function age(person) {
  return person.died - person.born;
}

function lifeExpectancy(familyArr) {
  var centuries = [];
  var ages = [];
  familyArr.forEach(function(person) {
    var century = Math.ceil(person.died/100);
    if (centuries.indexOf(century) === -1) {
      centuries.push(century);
      ages[century] = [];
    }
    ages[century].push(age(person))
  });
  centuries.forEach(function(deathCentury) {
    console.log(deathCentury + ": " + average(ages[deathCentury]));
  });
}
