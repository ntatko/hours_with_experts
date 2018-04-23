let VARIABLES = {}
const assignmentRegex = /(\w+)\s?\=\s?(.+)$/
const logRegex = /(\w+)/


function iteratorOfPromisesForEach(iterator, callback) {
  let p = Promise.resolve()
  for (const i of iterator) {
    p = p.then(() => i).then(callback)
  }
  return p
}

function interpret(file) {
  var lines = file.split(';')
  if (lines[lines.length -1] === '') {
    lines.splice(-1,1)
  }
  // iterate each line and wait for the promise to resolve each time...make the language sync
  iteratorOfPromisesForEach(lines, interpretLine)
}

function replaceVars(str) {
  let finalString = str
  for (let i in VARIABLES) {
    finalString = finalString.replace(i, VARIABLES[i])
  }
  return finalString
}

function interpretLine(line) {
  if (assignmentRegex.test(line)) {
    const varName = assignmentRegex.exec(line)[1]
    const op = replaceVars(assignmentRegex.exec(line)[2])

    return fetch('http://api.mathjs.org/v4/?expr=' + encodeURIComponent(op)).then(res => res.text()).then(res => {
      VARIABLES[varName] = res
    })
  } else {
    const varName = line.match(logRegex)[1]
    console.log(VARIABLES[varName])
    return Promise.resolve(true)
  }
}

function cmd() {
  var quit = false
  while (!quit) {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    var util = require('util');

    process.stdin.on('data', function (text) {
      console.log('received data:', util.inspect(text));
      if (text === 'quit\n') {
        done();
      }
    });
  }
}
