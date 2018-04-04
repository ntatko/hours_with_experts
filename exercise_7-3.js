class PGroup {
  constructor() {
    this.consists = [];
  }

  empty(item) {
    function add(item) {
      this.consists.push(item);
    };
  }

  get contents() {
    return this.consists;
  }

  has(item) {
    return this.consists.includes(item);
  }

  add(item) {
	let newer = new PGroup;
    newer.consists = this.consists;
    newer.consists.push(item);
    return newer;
  }

  delete(item) {
    if (this.consists.includes(item)) {
      let newer = new PGroup;
      newer.consists = this.consists.filter(function(element) {
        return element !== item;
      });
      return newer;
    } else {
      let newer = new PGroup;
      newer.consists = this.consists;
      return newer;
    }
  }
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(empty.has("b"));
// → false
console.log(b.has("a"));
// → false
