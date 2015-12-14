function isHappy(word) {
  let wordLength = word.length;
  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };
  let twoCharsHead = '';
  let invalidCombinations = {
    'ab': true,
    'cd': true,
    'pq': true,
    'xy': true
  };

  let vowelCount = 0, hasDoubleLetter = false, invalidSequenceFound = false;

  for (let index = 0; index < wordLength; index++) {
    let currentChar = word[index];
    twoCharsHead = `${twoCharsHead}${currentChar}`.slice(-2);
    if (vowels[currentChar]) {
      vowelCount += 1;
    }
    if (twoCharsHead.length === 2 && twoCharsHead[0] === twoCharsHead[1]) {
      hasDoubleLetter = true;
    }
    if (invalidCombinations[twoCharsHead]) {
      invalidSequenceFound = true;
    }
  }

  return vowelCount >= 3 && hasDoubleLetter && !invalidSequenceFound;
}

export default function niceWords(data) {
  return data.split('\n').reduce((happyCount, word) => {
    let localCount = isHappy(word) && 1 || 0;
    return happyCount + localCount;
  }, 0);
}
