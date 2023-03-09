const analyzeArray = (arr) => (
  {
    average: Math.max(...arr) / 2,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
);

export { analyzeArray };
