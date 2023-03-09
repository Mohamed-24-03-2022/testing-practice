import { analyzeArray } from './analyzeArray';

test('array analyzer', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([0, 8, 3, 4, 2, 6, 10])).toStrictEqual({
    average: 5,
    min: 0,
    max: 10,
    length: 7,
  });
});
