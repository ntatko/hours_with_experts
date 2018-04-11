
/*  I answered this question backwards, because the modules which I would
    write is dependant on the modules I could import and find on NPM or
    elsewhwere*/

console.log(
  "Modules dependant on other modules (child -> parent): \n" +
  "randomRobot -> randomPick \n" +
  "findRoute -> mailRoute \n" +
  "roadGraph -> buildGraph && roadGraph -> roads"
);

console.log(
  "Modules I bet I could find elsewhere (such as NPM): \n" +
  "randomPick, findRoute, buildGraph"
);

console.log(
  "Modules I would need to create (and reasons why I wouldn't create others) \n" +
  "Would not create 'roads': that is a given, and while I might record it, I would not create it \n" +
  "Would not create 'randomRobot': utterly useless, given the higher efficiency of others \n" +
  ""
);
