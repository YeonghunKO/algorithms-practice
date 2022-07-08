/*
접근법 확인해봐라
*/

function combination(n, r) {
  console.log(n, r);
  const memo = {};

  const dfs = (n, r) => {
    if (memo[`${n}C${r}`]) {
      return memo[`${n}C${r}`];
    }

    if (n === r || r === 0) {
      return 1;
    }

    return (memo[`${n}C${r}`] = dfs(n - 1, r) + dfs(n - 1, r - 1));
  };

  dfs(n, r);

  console.log(memo);
}

combination(5, 3);
