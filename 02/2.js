import numberSortComparator from '../lib/numberSortComparator';

export default function ribbon(data) {
  let presents = data.split('\n');
  return presents.reduce(function(totalFeet, present) {
    let dimensions = present.split('x').map(function(x) { return parseInt(x); }).sort(numberSortComparator);
    let shortestPerimeter = dimensions[0] * 2 + dimensions[1] * 2;
    let ribbon = shortestPerimeter + dimensions[0] * dimensions[1] * dimensions[2];
    return totalFeet + ribbon;
  }, 0);
}
