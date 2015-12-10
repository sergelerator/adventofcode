import numberSortComparator from '../lib/numberSortComparator';

export default function ribbon(data) {
  var presents = data.split('\n');
  return presents.reduce(function(totalFeet, present) {
    var dimensions = present.split('x').map(function(x) { return parseInt(x); }).sort(numberSortComparator);
    var shortestPerimeter = dimensions[0] * 2 + dimensions[1] * 2;
    var ribbon = shortestPerimeter + dimensions[0] * dimensions[1] * dimensions[2];
    return totalFeet + ribbon;
  }, 0);
}
