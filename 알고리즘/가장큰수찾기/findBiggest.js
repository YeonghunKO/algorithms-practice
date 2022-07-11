function biggest(array) {
  const biggestNum = array
    .map(n => n + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  console.log(biggestNum);
}
// console.log();

biggest([5, 6, 9]);
