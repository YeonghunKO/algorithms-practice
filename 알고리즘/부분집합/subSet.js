/*
- n만큼의 check 배열을 구현
- tempArr / resultArr를 만듬
- dfs로 n의 위치에 1을 삽입
- dfs로 n+1을 pass함
- arg가 n이 되면 check 배열을 순회
- 1인곳의 index만 tempArr에 담고 resultArr에 push
- tempArr 초기화
- dfs로 n의 위치에 0을 삽입
- dfs로 n-1을 pass 
- 위의 과정 반복
*/

function subSet(n) {
  const check = Array.from({ length: n }, () => 0);
  let tempArr = [];
  const result = [];

  const dfs = m => {
    if (m === n) {
      for (let i = 0; i < check.length; i++) {
        if (check[i] === 1) {
          tempArr.push(i + 1);
        }
      }
      tempArr.length && result.push(tempArr);
      //   console.log(tempArr);
      tempArr = [];
    } else {
      check[m] = 1;
      dfs(m + 1);
      check[m] = 0;
      dfs(m + 1);
    }
  };

  dfs(0);
  console.log(result);
}

subSet(3);
