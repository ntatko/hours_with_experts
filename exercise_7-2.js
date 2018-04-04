function sort(list) {
  let returned = []
  for (let i of mailRoute) {
    for (let j of list) {
      if (j.address == i) {
        returned.push(j);
      }
    }
  }
  return returned;
}

function yourRobot({place, parcels}, memory) {
  if (memory.length === 0) {
    memory = mailRoute;
    memory = memory.concat(mailRoute);
  } else if (memory.length === mailRoute.length) {
    parcels = sort(parcels);
    let parcel = parcels[0];
    if (parcel.place != place) {
      memory = findRoute(roadGraph, place, parcel.place);
    } else {
      memory = findRoute(roadGraph, place, parcel.address);
    }
  } else if (memory.length < mailRoute.length) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      memory = findRoute(roadGraph, place, parcel.place);
    } else {
      memory = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

runRobotAnimation(VillageState.random(), yourRobot, []);
