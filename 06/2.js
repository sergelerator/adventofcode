function handleInstruction(grid, {x1, y1, x2, y2}, brightnessDelta) {
  for (let i = x1; i <= x2; i++) {
    grid[i] || (grid[i] = []);

    for (let j = y1; j <= y2; j++) {
      grid[i][j] || (grid[i][j] = 0);
      grid[i][j] += brightnessDelta;
      if (grid[i][j] < 0) {
        grid[i][j] = 0;
      }
    }
  }
}

function parseInstruction(instruction) {
  const brightnessMap = {
    'toggle': 2,
    'turn off': -1,
    'turn on': 1
  };
  const regex = /^(turn off|turn on|toggle) (\d+,\d+) through (\d+,\d+)$/;
  const match = instruction.match(regex);
  const brightnessKey = match[1];
  const corner1 = match[2].split(',').map((n) => parseInt(n));
  const corner2 = match[3].split(',').map((n) => parseInt(n));

  return {
    brightnessDelta: brightnessMap[brightnessKey],
    rectangle: {
      x1: corner1[0],
      y1: corner1[1],
      x2: corner2[0],
      y2: corner2[1]
    }
  };
}

export default function lightsGrid(data) {
  let grid = [];
  handleInstruction(grid, {x1: 0, y1: 0, x2: 999, y2: 999}, 0);

  data.split('\n').forEach((instruction) => {
    let {brightnessDelta, rectangle} = parseInstruction(instruction);
    handleInstruction(grid, rectangle, brightnessDelta);
  });

  return grid.reduce((sum, row) => { return sum + row.reduce((rowSum, light) => { return rowSum + light; }, 0); }, 0);
}
