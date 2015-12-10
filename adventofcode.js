var fs = require('fs');

let day = process.argv[2];
let part = process.argv[3];
let solution = require(`./${day}/${part}.js`);
let inputFileName = `./${day}/${part}_input`;

fs.readFile(inputFileName, 'utf-8', function(err, input) {
  console.log(solution(input));
});
