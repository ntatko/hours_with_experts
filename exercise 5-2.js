function loop(i, condition, step, funct) {
  if (condition(i)) {
    funct(i);
    loop(step(i), condition, step, funct);
  } else {
    return;
  }
}
