/*
- 조합이다! 조합은 원래뽑으려는 갯수보다 1개 적은 갯수로 뽑은다음 특정 숫자를 그냥 붙이면 된다.
- 그원리로 재귀를 돌리는 것이다.

getCombinations
- result []를 준비
- selectNum이 1이면 arr를 그냥 리턴
- 그게 아니면 arr에 for문을 돌려줌
** biggestNum보다 적은 fixed는(currentNum) 그냥 넘어가도록 한다.
- 기본적으로 idx보다 이후의 slice된 arr를 재귀로 돌려서 조합을 구한다.
    - selectNum은 하나씩 줄어든다.
    - result.push(fixed + 조합)
*/

const getCombinations = (arr, selectCount, biggestNum = 0) => {
  const result = [];
  if (selectCount === 1) {
    return arr.map(num => [num]);
  }

  arr.forEach((fixed, idx, originalArr) => {
    if (fixed >= biggestNum) {
      const slicedArr = originalArr.slice(idx + 1);
      const combinations = getCombinations(slicedArr, selectCount - 1);
      const attachedCombinations = combinations.map(num => [fixed, ...num]);
      //   console.log(attachedCombinations);
      result.push(...attachedCombinations);
    }
  });

  return result;
};

function solution1(num, k) {
  const numArr = num.split('');
  const selectCount = numArr.length - k;
  console.log(numArr, selectCount);
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < k; i++) {
    max = Math.max(max, numArr[i]);
  }

  const combinations = getCombinations(numArr, selectCount, max).map(num =>
    num.join('')
  );
  console.log(Math.max(...combinations));
}

// solution1('4178258241', 4);

function solution2(num, k) {
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    const eachNum = num[i];
    while (k > 0 && eachNum > stack[stack.length - 1]) {
      k--;
      stack.pop();
    }
    stack.push(eachNum);
  }
  console.log(stack.join(''));
}

solution2('4178258241', 4);
