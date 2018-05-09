const url = "https://eloquentjavascript.net/author";
const types = ["text/plain",
               "text/html",
               "application/json",
               "application/rainbows+unicorns"];

function showTypes() {
  for (let type of types) {
    fetch(url, {headers: {accept: type}}).catch(console.log).then(function(resp) {
    	console.log(type + ': ')
      	resp.text().then(console.log)
      	console.log('\n\n')
    })
  }
}

showTypes();
