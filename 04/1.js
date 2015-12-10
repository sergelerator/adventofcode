import md5 from 'md5';

export default function adventCoin(data, target = '00000') {
  let currentNumber = 1;
  let hashedString = md5(data + currentNumber);

  while (hashedString.substring(0, target.length) !== target) {
    currentNumber++;
    hashedString = md5(data + currentNumber);
  }
  return currentNumber;
}
