function fibonaci(num) {
  const memo = [1, 1, 2];
  for (let i = 3; i <= num; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[num - 1];
}
