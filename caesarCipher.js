const caesarCipher = (phrase, key) => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const string = phrase.toLowerCase();
  const phraseSplitted = string.split('');
  const newPhraseArr = [];

  phraseSplitted.forEach((currentLetter) => {
    const currentLetterIndex = alphabet.indexOf(currentLetter);
    let shiftedLetterIndex = currentLetterIndex + key;
    if (shiftedLetterIndex > 25) shiftedLetterIndex -= 26;
    (alphabet.includes(currentLetter)) ? newPhraseArr.push(alphabet[shiftedLetterIndex]) : newPhraseArr.push(currentLetter);
  });

  return newPhraseArr.join('');
};

export { caesarCipher };
