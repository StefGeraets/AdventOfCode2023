const sumReducer = (sum: number, num: number): number => sum + num;

const ColorMax: Record<string, number> = {
  red: 12,
  green: 13,
  blue: 14,
};

const first = (input: string) => {
  const games = input.split('\n');
  const result = games
    .map((game) => {
      return game
        .split(': ')[1]
        .split('; ')
        .map((set) => {
          const pulls = set.split(', ');
          return pulls.every((pull) => {
            const [amt, color] = pull.split(' ');
            return ColorMax[color] >= Number(amt);
          });
        })
        .every((play) => play);
    })
    .reduce((sum, result, i) => {
      return result ? sum + (i + 1) : sum;
    }, 0);

  return `${result}`;
};

const expectedFirstSolution = '8';

const second = (input: string) => {
  const games = input.split('\n');
  const result = games
    .map((game) => {
      const maxCount: Record<string, number> = {
        red: 0,
        green: 0,
        blue: 0,
      };
      game
        .split(': ')[1]
        .split('; ')
        .forEach((set) => {
          const pulls = set.split(', ');
          return pulls.forEach((pull) => {
            const [amt, color] = pull.split(' ');
            if (maxCount[color] < Number(amt)) {
              maxCount[color] = Number(amt);
            }
          });
        });
      return maxCount.red * maxCount.green * maxCount.blue;
    })
    .reduce(sumReducer);

  return `${result}`;
};

const expectedSecondSolution = '2286';

export { first, expectedFirstSolution, second, expectedSecondSolution };
