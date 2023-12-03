export const sumReducer = (sum: number, num: number): number => sum + num;
export const sumConvetReducer = (sum: number, num: string): number =>
  sum + Number(num);
