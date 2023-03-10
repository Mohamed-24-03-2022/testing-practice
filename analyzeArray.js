const analyzeArray = (arr) => {
  if (!Array.isArray(arr)) throw new Error('not a valid array');

  const filteredArr = arr.filter((element, index) => {
    return !isNaN(element);
  });

  return {
    average: Math.max(...filteredArr) / 2,
    min: Math.min(...filteredArr),
    max: Math.max(...filteredArr),
    length: filteredArr.length,
  };
};
export { analyzeArray };
