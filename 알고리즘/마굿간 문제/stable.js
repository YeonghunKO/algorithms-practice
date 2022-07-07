/*
말을 최대한 서로 멀리 둔다고 했을 때 가장 가까운 말사이의 거리는?
- distance를 순회
    - 
horses가 
*/

function stable(stableLocation, horses) {
  let lt = stableLocation[0];
  let rt = stableLocation[stableLocation.length - 1];
  let distance;
  let cnt = 1;
  let lastHorsesPos = 0;

  let answer;

  const startCountHorse = distance => {
    for (let i = 0; i < stableLocation.length; i++) {
      if (stableLocation[i] - stableLocation[lastHorsesPos] >= distance) {
        cnt++;
        lastHorsesPos = i;
      }
    }

    lastHorsesPos = 0;
  };

  while (lt <= rt) {
    distance = parseInt((lt + rt) / 2);
    startCountHorse(distance);
    if (cnt >= horses) {
      answer = distance;
      lt = distance + 1;
    } else {
      rt = distance - 1;
    }

    cnt = 1;
  }

  console.log(answer);
  return answer;
}

const horses = 3;
const stableLocation = [1, 4, 9, 11, 12];

stable(stableLocation, horses);

// 3
