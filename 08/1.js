function isCompleteEscapeSequence(sequence) {
  return !!sequence.match(/\\(\\|"|x[0-9A-Fa-f]{2})/);
}

export default function parse(data) {
  let codeCharactersCount = 0;
  let inMemoryCharactersCount = 0;

  data.split('\n').forEach((string) => {
    const stringLength = string.length;
    let currentEscapedSequence = '';
    codeCharactersCount += stringLength;

    for (let index = 0; index < stringLength; index ++) {
      let codeChar = string[index];
      if (currentEscapedSequence.length > 0) {
        currentEscapedSequence += codeChar;
        if (isCompleteEscapeSequence(currentEscapedSequence)) {
          currentEscapedSequence = '';
          inMemoryCharactersCount++;
        }
      } else {
        if (codeChar === '\\') {
          currentEscapedSequence = codeChar;
        } else {
          inMemoryCharactersCount++;
        }
      }
    }
    inMemoryCharactersCount -= 2;
  });

  return codeCharactersCount - inMemoryCharactersCount;
}
