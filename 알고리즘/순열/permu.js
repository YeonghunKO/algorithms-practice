function permutation(r, arr) {
  const check = Array.from({ length: arr.length }, () => 0);
  const tempArr = [];
  const answer = [];
  // console.log(check);
  function dfs(level) {
    if (level === r) {
      answer.push(tempArr.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tempArr[level] = arr[i];
          dfs(level + 1);
          check[i] = 0;
        }
      }
    }
  }

  dfs(0);

  console.log(answer);

  return answer;
}

// permutation(2, [1, 2, 3]);
