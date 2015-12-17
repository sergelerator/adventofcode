import {mapWires, resolveCircuit} from './circuit';
import firstSolution from './1';

export default function moreWires(data) {
  const circuit = mapWires(data);
  circuit.b = firstSolution(data);
  resolveCircuit(circuit);
  return circuit.a;
}
