let text = "'I'm the cook,' he said, 'It's my job.'";
// Change this call.
console.log(text.replace(/'(?=[^smt]|$)/g, "\""));
// → "I'm the cook," he said, "it's my job."
