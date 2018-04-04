function useRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      return turn;
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function avg(arr) {
  return arr.reduce(function(a, b) { return a + b; })/arr.length;
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let r1 = [];
  let r2 = [];
  for (let i = 0; i < 100; i++) {
    let randomState = VillageState.random();
    r1.push(useRobot(randomState, robot1, memory1));
    r2.push(useRobot(randomState, robot2, memory2));
  }
  console.log("Robot 1: " + avg(r1) + " hops, \t Robot 2: " + avg(r2) + " hops.");
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
