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

// subSet(3);

/*
위의 subSet과 같은 원리
- 단 sum을 build-up하면서 넘겨주어야함.
- level, sum으로 dfs에 넘겨줌
- base case는 level이 answer보다 크거나, sum이 changes보다 클때
- changes === sum일때
    - 이전 answer와 level을 비교해서 더 낮은것으로
    - comb = tempCoinComb를 얕은 복사

- else 일때
    - 포문을 돌린다. coinType을 상대로
    -  tempCoinComb[level] =  coinType 
    - 그리고 sum에 coinType[i]를 더하고 level을 더한뒤에 dfs에 넘겨주다. 
    -  
    - dfs를 빠져나온뒤엔 tempCoinComb[level] = 0으로 만들어서 풀어준다.
*/

function coinChange(coinCount, coinType, changes) {
  const collection = Array.from(
    { length: Math.ceil(changes / coinType[0]) },
    () => 0
  );
  let result = Number.MAX_SAFE_INTEGER;
  let coinComb;

  const dfs = (level, sum) => {
    if (sum > changes || level > result) {
      return;
    }

    if (sum === changes) {
      console.log(collection);
      coinComb = collection.slice();

      result = Math.min(sum, level);
      console.log(result);
    } else {
      for (let i = 0; i < coinType.length; i++) {
        // sum += coinType[i];
        console.log(sum);
        collection[level] = coinType[i];
        dfs(level + 1, sum + coinType[i]);
        collection[level] = 0;
      }
    }
  };

  dfs(0, 0);
  //   console.log(coinComb);
}

// coinChange(3,[1,2,5],15)
