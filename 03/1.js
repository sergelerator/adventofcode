export default function houseDirections(data) {
  let santaPosition = [0, 0];
  let visitedHomes = {'0,0': 1};
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
      santaPosition[0] += commands[command][0];
      santaPosition[1] += commands[command][1];
      visitedHome = santaPosition.join(',');
      visitedHomes[visitedHome] || (visitedHomes[visitedHome] = 0);
      visitedHomes[visitedHome] += 1;
    }
  }

  return Object.keys(visitedHomes).length;
}
