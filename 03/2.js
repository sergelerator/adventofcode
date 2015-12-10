export default function roboSanta(data) {
  let santaPosition = [0, 0], roboPosition = [0, 0];
  let activePosition = santaPosition;
  let visitedHomes = {'0,0': 2};
  let length = data.length;
  let commands = {
    '^': [ 0,  1],
    'v': [ 0, -1],
    '>': [ 1,  0],
    '<': [-1,  0]
  };

  for (let i = 0; i < length; i++) {
    let command = data[i], visitedHome;
    if (commands[command]) {
      activePosition[0] += commands[command][0];
      activePosition[1] += commands[command][1];
      visitedHome = activePosition.join(',');
      visitedHomes[visitedHome] || (visitedHomes[visitedHome] = 0);
      visitedHomes[visitedHome] += 1;
    }
    if (activePosition === santaPosition) {
      activePosition = roboPosition;
    } else {
      activePosition = santaPosition;
    }
  }

  return Object.keys(visitedHomes).length;
}
