import numberSortComparator from '../lib/numberSortComparator';

export default function wrappingPaper(data) {
  var presents = data.split('\n');
  return presents.reduce(function(totalSquareFeet, present) {
    var dimensions = present.split('x').map(function(x) { return parseInt(x); });
    var sidesSquareFeet = [
      dimensions[0] * dimensions[1],
      dimensions[0] * dimensions[2],
      dimensions[1] * dimensions[2]
    ].sort(numberSortComparator);
    var presentSquareFeet = sidesSquareFeet[0] * 3 + sidesSquareFeet[1] * 2 + sidesSquareFeet[2] * 2;
    return presentSquareFeet + totalSquareFeet;
  }, 0);
}
