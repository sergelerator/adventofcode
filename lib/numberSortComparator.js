export default function numberSortComparator(x, y) {
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}
