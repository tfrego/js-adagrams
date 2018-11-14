const Adagrams = {
  drawLetters() {
    let drawnLetters = [];
    let letterPool = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ'.split('')

    let i = 0;
    while (i < 10) {
      let letter = letterPool[Math.floor(Math.random() * letterPool.length)];
      let pos = letterPool.indexOf(letter);
      drawnLetters.push(letter);
      letterPool.splice(pos, 1);
      i += 1;
    }
    return drawnLetters;
  },
  usesAvailableLetters() {
    
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
