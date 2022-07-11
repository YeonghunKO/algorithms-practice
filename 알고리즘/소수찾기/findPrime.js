function findPrime(num) {
  const set = new Set();
  const numArr = num.split('');

  combi(numArr, '');

  function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  }

  function combi(arr, str) {
    if (str.length) {
      if (!set.has(Number(str))) {
        if (isPrime(Number(str))) {
          set.add(Number(str));
          console.log(str);
          // return 을 여기서 해버리면 아래로 넘어가지 않아서 array가 중간에서 멈춘다...
          // 이것때문에 거의 1시간을 헤맸는데 그래도 버그를 찾아서 뿌듯하다.
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
      const subArr = arr.slice(0);
      subArr.splice(i, 1);
      combi(subArr, str + arr[i]);
    }
  }

  console.log(set);
}

findPrime('123');
