var requestify = require('requestify');

async function math(inputString) {
  var returning = await requestify.get('http://api.mathjs.org/v4/?expr=' + encodeURIComponent(inputString))
  console.log(returning.body)
  return returning.body
}

console.log(
  math('round(5/3+(.25^4))')
)
