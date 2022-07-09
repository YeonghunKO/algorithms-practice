function findPrime(num) {
  const set = new Set();
  const numArr = num.split('');

  combi(numArr, '');

  function isPrime(num) {
    for (let i = 2; Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  }

  function combi(arr, str) {
    if (str.length) {
      if (!set.has(str)) {
        if (isPrime(str)) {
          set.add(str);
          return;
        }
      }
    }

    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        const subArr = arr.slice();
        const subStr = subArr[i];
        subArr.splice(i, 1);
        combi(subArr, str + subStr);
      }
    }
  }

  console.log(set);
}

findPrime('137');
