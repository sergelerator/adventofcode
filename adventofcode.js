var fs = require('fs');

let day = process.argv[2];
let part = process.argv[3];
let inputFileName = process.argv[4] || `./${day}/input`;
let solution = require(`./${day}/${part}.js`);

fs.readFile(inputFileName, 'utf-8', function(err, input) {
  if (err) {
    throw err;
  }
  if (input.slice(-1) === '\n') {
    input = input.slice(0, -1);
  }
  console.log(solution(input));
});
