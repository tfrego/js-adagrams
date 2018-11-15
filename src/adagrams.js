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
  scoreWord(word) {
    const points = {
      'A': 1,
      'E': 1,
      'I': 1,
      'O': 1,
      'U': 1,
      'L': 1,
      'N': 1,
      'R': 1,
      'S': 1,
      'T': 1,
      'D': 2,
      'G': 2,
      'B': 3,
      'C': 3,
      'M': 3,
      'P': 3,
      'F': 4,
      'H': 4,
      'V': 4,
      'W': 4,
      'Y': 4,
      'K': 5,
      'J': 8,
      'X': 8,
      'Q': 10,
      'Z': 10
    }
    let score = 0;
    const wordToScore = word.toUpperCase().split('');

    wordToScore.forEach(function (letter) {
      score += points[letter];
    });

    if (wordToScore.length >= 7 && wordToScore.length <= 10) {
      score += 8;
    }

    return score;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
