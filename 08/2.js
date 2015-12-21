const charsToEscape = {
  '\\': true,
  '"': true
};

export default function parse(data) {
  let codeCharactersCount = 0;
  let encodedCharactersCount = 0;

  data.split('\n').forEach((string) => {
    const stringLength = string.length;
    codeCharactersCount += stringLength;
    encodedCharactersCount += stringLength;

    for (let index = 0; index < stringLength; index ++) {
      let codeChar = string[index];
      if (charsToEscape[codeChar]) {
        encodedCharactersCount++;
      }
    }
    encodedCharactersCount += 2;
  });

  return encodedCharactersCount - codeCharactersCount;
}
