/*
- 우선 clothes를 clothType - 갯수 로 정리
- 그리고 갯수 + 1해서 곱하고 -1하기 (reduce를 통해서) 
*/

const clothes = [
  ['yellowhat', 'headgear'],
  ['blackhat', 'headgear'],
  ['yellowsunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
  ['yellowsunglasses', 'eyewear'],
  ['sandle', 'shoes'],
  ['sandle', 'shoes'],
  ['orange_turban', 'headgear'],
  ['sandle', 'shoes'],
  ['bluesunglasses', 'eyewear'],
  ['sandle', 'shoes'],
  ['sandle', 'shoes'],
];

function disguise(clothes) {
  const answer =
    Object.values(
      clothes.reduce((obj, clothe) => {
        obj[clothe[1]] = (obj[clothe[1]] || 1) + 1;
        return obj;
      }, {})
    ).reduce((a, b) => {
      return (a = a * b);
    }, 1) - 1;

  console.log(answer);
}
disguise(clothes);

function subSet(arr) {
  const answer = [];
  let subSetArr = [];
  const check = Array.from({ length: arr.length }, () => 0);
  const dfs = level => {
    if (level === arr.length) {
      for (let i = 0; i < check.length; i++) {
        if (check[i] === 1) {
          subSetArr.push(arr[i]);
        }
      }
      answer.push(subSetArr.slice());
      subSetArr = [];
    } else {
      check[level] = 1;
      dfs(level + 1);
      check[level] = 0;
      dfs(level + 1);
    }
  };

  dfs(0);

  console.log(answer);
}

// 부분집합 구해보기.
