export default function notQuiteLisp(input) {
  let reference = {
    '(': 1,
    ')': -1
  };
  let inputLength = input.length;
  let currentLevel = 0;

  for (let index = 0; index < inputLength; index++) {
    currentLevel += reference[input[index]] || 0;
    if (currentLevel < 0) {
      return index + 1;
    }
  }
}
