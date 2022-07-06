function shortest(word, targetAlphabet) {
  const result = [];
  let pos = 1000;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== targetAlphabet) {
      pos++;
    } else {
      pos = 0;
    }
    result.push(pos);
  }

  pos = 1000;

  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] !== targetAlphabet) {
      pos++;
    } else {
      pos = 0;
    }
    result[i] = Math.min(pos, result[i]);
  }

  return result;
}

shortest('watermelon', 'e'); //  1 0 1 2 1 0 1 2 2 1 0
