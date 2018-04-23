function skipSpace(input) {
  var skip = input.match(/^(\s|#.*)*/);
  for (let i = 0; i < skip[0].length; i ++) {
    input = input.slice(1)
  }
  return input
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
