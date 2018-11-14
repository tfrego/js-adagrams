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
  usesAvailableLetters(input, lettersInHand) {
    const word = input.toUpperCase().split('');

    const count = (arr, element) => {
      let sum = 0;
      arr.forEach(function (item) {
        if (item === element ) {
          sum += 1;
        }
      });
      return sum;
    };

    const letterResults = word.map(function (letter) {
      if (count(word, letter) > count(lettersInHand, letter)) {
        return false;
      } else {
        return true;
      }
    });

    let answer = true;

    letterResults.forEach(function (item) {
      if (item === false) {
        answer = false;
      }
    });

    return answer;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
