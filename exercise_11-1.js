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

function recursiveLoop(nest, currentLocation) {
  try {
    if (currentLocation == anyStorage(nest, currentLocation, 'scalpel')) {
      return currentLocation
    } else {
      return recursiveLoop(nest, await anyStorage(nest, currentLocation, 'scalpel'))
    }
  } catch(e) {
    throw new Error(e)
  }
}

function locateScalpel2(nest) {
  return recursiveLoop(nest, nest.name)
}

locateScalpel2(bigOak).then(console.log);
// → Butcher Shop
