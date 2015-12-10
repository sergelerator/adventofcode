export default function notQuiteLisp(input) {
  let reference = {
    '(': 1,
    ')': -1
  };
  let output = 0;
  let inputLength = input.length;

  for (let index = 0; index < inputLength; index++) {
    output += reference[input[index]] || 0;
  }

  return output;
}
