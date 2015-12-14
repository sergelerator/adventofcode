import niceWords from './niceWords';

function isHappy(word) {
  let wordLength = word.length;
  let letterPairs = [];
  let twoCharsHead = '';

  let letterPairsFound = false, divorcedPairFound = false;

  for (let index = 0; index < wordLength; index++) {
    let currentChar = word[index];
    twoCharsHead = `${twoCharsHead}${currentChar}`.slice(-2);

    if (index >= 2) {
      if (word[index-2] === currentChar) {
        divorcedPairFound = true;
      }
    }

    if (twoCharsHead.length === 2) {
      if (letterPairs.slice(0, -1).indexOf(twoCharsHead) !== -1) {
        letterPairsFound = true;
      }

      letterPairs.push(twoCharsHead);
    }
  }

  return letterPairsFound && divorcedPairFound;
}

export default function(data) {
  return niceWords(isHappy, data);
}
