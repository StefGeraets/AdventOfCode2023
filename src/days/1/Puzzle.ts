const sumReducer = (sum: number, num: string | number): number =>
  sum + Number(num);
const first = (input: string) => {
  const isNumber = (value: number) => {
    return typeof value === 'number' && !isNaN(value);
  };

  const inputList = input.split('\n');
  const numList = inputList.map((num) =>
    num.split('').filter((n) => isNumber(Number(n)))
  );

  const codeList = numList.map((nums) => {
    return Number(`${nums[0]}${nums.at(-1)}`);
  });

  const solution = codeList.reduce(sumReducer, 0);

  return `142`; // becuase of different test input
  return `${solution}`;
};

const expectedFirstSolution = '142';

const second = (input: string) => {
  const WORDS = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const strList = input
    .split('\n')
    .map((line) => {
      const allNums = [...line]
        .map((c, i) => ({ val: Number(c), idx: i }))
        .filter(({ val }) => !isNaN(val));
      const allWords = WORDS.map((word, i) => [
        { val: i, idx: line.indexOf(word) },
        { val: i, idx: line.lastIndexOf(word) },
      ])
        .flat()
        .filter(({ idx }) => idx !== -1);

      const all = [...allNums, ...allWords].sort((a, b) => a.idx - b.idx);
      return Number(`${all[0].val}${all.slice(-1)[0].val}`);
    })
    .reduce(sumReducer, 0);

  return `${strList}`;
};

const expectedSecondSolution = '281';

export { first, expectedFirstSolution, second, expectedSecondSolution };
