const sum = (arg:Array<number>):number => {
  return arg.reduce((pre, next) => pre + next);
};

test('累加', () => {
  expect(sum([1, 2, 3])).toBe(6);
});