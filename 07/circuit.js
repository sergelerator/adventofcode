function getSignalFrom(wires, wire) {
  let signal = wires[wire];

  if (signal === undefined) {
    return ~~wire;
  }
  if (typeof signal === 'function') {
    wires[wire] = signal();
  }
  return wires[wire];
}

function directSignal(wires, input) {
  return getSignalFrom(wires, input);
}

function andGate(wires, leftSide, rightSide) {
  return getSignalFrom(wires, leftSide) & getSignalFrom(wires, rightSide);
}

function orGate(wires, leftSide, rightSide) {
  return getSignalFrom(wires, leftSide) | getSignalFrom(wires, rightSide);
}

function notGate(wires, input) {
  return ~getSignalFrom(wires, input) & 0xFFFF;
}

function leftShift(wires, input, bits) {
  return getSignalFrom(wires, input) << ~~bits;
}

function rightShift(wires, input, bits) {
  return getSignalFrom(wires, input) >> ~~bits;
}

const gates = {
  'AND': andGate,
  'OR': orGate,
  'NOT': notGate,
  'LSHIFT': leftShift,
  'RSHIFT': rightShift
};

export function mapWires(data) {
  let wires = {};

  data.split('\n').forEach((instruction) => {
    let tokens = instruction.split(' ');
    let gate, input = [], wire = tokens.pop();
    tokens.pop(); // No need for the arrow token

    tokens.forEach((token) => {
      if (gates[token]) {
        gate = gates[token];
      } else {
        input.push(token);
      }
    });

    gate || (gate = directSignal);
    wires[wire] = () => gate.apply(null, [wires, ...input]);
  });

  return wires;
}

export function resolveCircuit(wires) {
  for (let wire in wires) {
    wires[wire] = getSignalFrom(wires, wire);
  }
}
