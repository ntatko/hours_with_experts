function Promise_all(promises) {
  if (Array.isArray(promises)) {
    return new Promise((resolve, reject) => {
      returning = []
      let count = 0
      for (let i in promises) {
        promises[i].then(item => {
          if (returning.indexOf(item) === -1) {
          	returning.push(item)
          }
          returning = returning.sort()
          count += 1;
          if (count === promises.length) resolve(returning)
        }).catch(reject)
      }
      if (promises.length == 0) resolve(returning)
    })
  }
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
