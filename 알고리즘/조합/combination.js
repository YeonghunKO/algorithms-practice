/*
접근법 확인해봐라
*/

function combination(n, r) {
  console.log(n, r);
  const memo = {};

  const dfs = (num, pick) => {
    console.log(num, pick);
    if (memo[`${num}C${pick}`]) {
      return memo[`${num}C${pick}`];
    }

    if (num === pick || pick === 0) {
      return 1;
    }

    return (memo[`${num}C${pick}`] =
      dfs(num - 1, pick) + dfs(num - 1, pick - 1));
  };

  //   console.log(memo);
  return dfs(n, r);
}

/*
- 순열 만드는 것처럼 해봐라
- num을 찾아가는데 필요한 조합을 combContaier에 저장해라
- dfs로 찾아가라 
  - 예를 들어 num이 4이면 1 ~ 4를 순열로 만들어가면서 level에 대한 조합을 곱하고 그 이전의 sum을 더한다음 dfs에 넘겨라.
  - pattern = [] , check = [], found = false , answer 이 필요
  - dfs가 끝나면 check에서 해당 level을 0으로 돌려놓는거 잊지 마라!
    - 그래야 for문에서 다음으로 넘어갈때 순열을 차례대로 만들 수 있는 것이다.
*/

function predicetComb(num, totalSum) {
  const check = Array.from({ length: num + 1 }, () => 0);
  const pattern = [];
  const combContaier = {};
  let found = false;
  let answer;

  function dfs(level, sum) {
    if (found) {
      return;
    }

    if (level === num && sum === totalSum) {
      answer = pattern.slice();
      found = true;
    } else {
      for (let i = 0; i < num; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          pattern[level] = i + 1;
          dfs(
            level + 1,
            sum + combContaier[`${num - 1}C${level}`] * pattern[level]
          );
          check[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < num; i++) {
    combContaier[`${num - 1}C${i}`] = combination(num - 1, i);
  }

  dfs(0, 0);
  console.log(combContaier);
  console.log(answer);
}

// predicetComb(4, 16);

// combination(5, 3);
