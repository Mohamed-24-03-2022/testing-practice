export const reverseString = (string) => {
  let reversedArr = [];
  string.split('').forEach(letter => {
    reversedArr.unshift(letter);
  });
  return reversedArr.join('');
}