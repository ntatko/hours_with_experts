function chessboard(size = 8, character = "#") {
  for (let i = 0; i < size; i++) {
    let str = ''
    for (let j = 0; j < size; j++) {
      if ( (i + j) % 2 == 0) {
        str += ' ';
      } else {
        str += character;
      }
    }
    console.log(str);
  }
}

chessboard();
