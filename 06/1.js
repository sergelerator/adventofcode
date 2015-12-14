function turnOff() {
  return 0;
}

function turnOn() {
  return 1;
}

function toggle(currentValue) {
  return ((currentValue + 1) % 2) || 0;
}

function handleInstruction(grid, {x1, y1, x2, y2}, fn) {
  for (let i = x1; i <= x2; i++) {
    grid[i] || (grid[i] = []);

    for (let j = y1; j <= y2; j++) {
      grid[i][j] = fn(grid[i][j]);
    }
  }
}

function parseInstruction(instruction) {
  const fnMap = {
    'toggle': toggle,
    'turn off': turnOff,
    'turn on': turnOn
  };
  const regex = /^(turn off|turn on|toggle) (\d+,\d+) through (\d+,\d+)$/;
  const match = instruction.match(regex);
  const fnKey = match[1];
  const corner1 = match[2].split(',').map((n) => parseInt(n));
  const corner2 = match[3].split(',').map((n) => parseInt(n));

  return {
    fn: fnMap[fnKey],
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
  handleInstruction(grid, {x1: 0, y1: 0, x2: 999, y2: 999}, turnOff);

  data.split('\n').forEach((instruction) => {
    let {fn, rectangle} = parseInstruction(instruction);
    handleInstruction(grid, rectangle, fn);
  });

  return grid.reduce((sum, row) => { return sum + row.reduce((rowSum, light) => { return rowSum + light; }, 0); }, 0);
}
