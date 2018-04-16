var been = []
var log = []
var holding = []

function sort(list, place) {
  let returned = []
  let longerRoute = mailRoute.concat(mailRoute)
  for (let i = 0; i < mailRoute.length; i++) {
    for (let j of list) {
      if (holdingParcel(j)) {
        let attr = 'address'
      } else {
        let attr = 'place'
      }
      if (j[attr] === longerRoute[mailRoute.indexOf(place) + i]) {
        returned.push(j)
      }
    }
  }
  return returned;
}

function holdingParcel(parcel) {
  return holding.indexOf(parcel) !== -1
}

function newPackagedPickedUp(parcels, place) {
  for (let i of parcels) {
    if (place === i.place) {
      if (!holdingParcel(i)) {
        holding.push(i)
        return true
      }
    }
  }
  return false
}

function parcelDelivered(parcels, place) {
  for (let i of parcels) {
    if (place === i.address) {
      if (holdingParcel(i)) {
        delete(holding)
        return true
      }
    }
  }
  return false
}

function yourRobot({place, parcels}, memory) {
  if (newPackagedPickedUp(parcels, place) || parcelDelivered(parcels, place)) {
    parcels = sort(parcels, place)
  }
  let parcel = parcels[0]
  /*if (parcel.place != place) {
    memory = findRoute(roadGraph, place, parcel.place)
  } else {
    memory = findRoute(roadGraph, place, parcel.address)
  }*/
  if (holdingParcel(parcel)){
    memory = findRoute(roadGraph, place, parcel.address)
  } else {
    memory = findRoute(roadGraph, place, parcel.place)
  }
  log.push(memory[0])
  return {direction: memory[0], memory: memory.slice(1)}
}

runRobotAnimation(VillageState.random(), yourRobot, [])
