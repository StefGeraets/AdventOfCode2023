## Initialize day puzzle

Replace `{day}` with the day number

```shell
pnpm init-day {day}
```

This wil generate a new folder in `src/days` including an `input.txt`, `test.txt` for the inputs and a `Puzzle.ts` for part 1 and 2 of the puzzle

## Running test

This will run all tests with the `test.txt` as the input of the solutions against the `expectedFirstSolution` or `expectedSecondSolution` respectively

```bash
pnpm t
```

## Run the puzzle

Replace `{day}` with the day number

```bash
pnpm dev {day}
```
