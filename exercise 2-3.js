let size = 8;
let string = "";
for (let i = 0; i < size-1; i++) {
  string += "# ";
}
string += "#";
for (let i = 0; i < size; i++) {
  if (i % 2 == 0) {
    console.log(" " + string);
  } else {
    console.log(string);
  }
}
