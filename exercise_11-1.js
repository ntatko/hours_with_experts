async function locateScalpel(nest) {
  let lastHop = await anyStorage(nest, nest.name, 'scalpel')
  let hopLocation = await anyStorage(nest, lastHop, 'scalpel')
  while (lastHop !== hopLocation){
    try {
      lastHop = hopLocation
      hopLocation = await anyStorage(nest, hopLocation, 'scalpel')
    }
    catch(e) {
      throw new Error(e)
    }
  }
  return hopLocation
}

function recursiveLoop(nest, thisHop) {
  try {
    return anyStorage(nest, thisHop, 'scalpel').then(nextHop => {
      if (thisHop !== nextHop) {
        return recursiveLoop(nest, nextHop)
      }
      return thisHop
    })
  } catch(e) {
    throw new Error(e)
  }
}

function locateScalpel2(nest) {
  return recursiveLoop(nest, nest.name)
}

locateScalpel(bigOak).then(console.log)
locateScalpel2(bigOak).then(console.log)
// → Butcher Shop
