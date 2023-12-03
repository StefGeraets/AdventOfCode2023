import { sumReducer } from '../../utils/utils';

const NumberRegex = /\d+/g;
const SymbolRegex = /[^0-9\.]/g;

type NumberEntry = {
  type: 'number';
  x: number;
  y: number;
  token: string;
  value: number;
};

type SymbolEntry = {
  type: 'symbol';
  x: number;
  y: number;
  token: string;
};

const parse = (input: string) => {
  const entries: (SymbolEntry | NumberEntry)[] = [];
  input.split('\n').map((line, y) => {
    for (const number of line.matchAll(NumberRegex)) {
      entries.push({
        type: 'number',
        x: number.index,
        y,
        token: number[0],
        value: Number(number),
      });
    }

    for (const symbol of line.matchAll(SymbolRegex)) {
      entries.push({
        type: 'symbol',
        x: symbol.index,
        y,
        token: symbol[0],
      });
    }
  });

  return entries;
};

const adjacent = (numberEntity: NumberEntry, symbolEntity: SymbolEntry) => {
  // Expand the number entity by one in each direction => point in a rectangle test.
  const x0 = numberEntity.x - 1;
  const x1 = numberEntity.x + numberEntity.token.length;
  const y0 = numberEntity.y - 1;
  const y1 = numberEntity.y + 1;
  return (
    symbolEntity.x >= x0 &&
    symbolEntity.x <= x1 &&
    symbolEntity.y >= y0 &&
    symbolEntity.y <= y1
  );
};

const first = (input: string) => {
  const partsBox = parse(input);
  const numbers = partsBox.filter(
    (part) => part.type === 'number'
  ) as NumberEntry[];
  const symbols = partsBox.filter(
    (symbol) => symbol.type === 'symbol'
  ) as SymbolEntry[];

  const result = numbers
    .filter((number) => symbols.some((symbol) => adjacent(number, symbol)))
    .map((number) => number.value)
    .reduce(sumReducer, 0);

  return `${result}`;
};

const expectedFirstSolution = '4361';

const second = (input: string) => {
  const partsBox = parse(input);
  const numbers = partsBox.filter(
    (part) => part.type === 'number'
  ) as NumberEntry[];
  const symbols = partsBox.filter(
    (symbol) => symbol.type === 'symbol'
  ) as SymbolEntry[];

  const result = symbols
    .filter((sym) => sym.token === '*')
    .map((symbol) => {
      const adjacentNumbers = numbers
        .filter((num) => adjacent(num, symbol))
        .map((num) => num.value);
      return adjacentNumbers.length === 2
        ? adjacentNumbers[0] * adjacentNumbers[1]
        : 0;
    })
    .reduce(sumReducer, 0);

  return `${result}`;
};

const expectedSecondSolution = '467835';

export { first, expectedFirstSolution, second, expectedSecondSolution };
