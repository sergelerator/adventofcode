export default function niceWords(isHappy, data) {
  return data.split('\n').reduce((happyCount, word) => {
    let localCount = isHappy(word) && 1 || 0;
    return happyCount + localCount;
  }, 0);
}
