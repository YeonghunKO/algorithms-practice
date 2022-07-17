/*
이건 큐에다가 트럭이랑, 트럭이 나갈 시간을 같이 넣고 while을 계속 돌린다.
그래서 시간이 되면 그 트럭을 다리에서 제거한다.
그리고 트럭이 다리에 지나갈 수 있다면 qu에 [트럭,나갈시간]을 추가한다.
만약 다리에 꽉차서 트럭이 더이상 들어올 수 없다고 한다면, 시간을 뒤로 당긴다. 트럭이 빠져나갈 수 있을 때까지

que 안에다가 [0,0]을 넣고 init한다.
*/

const bridgeLength = 2;
const weight = 10;
const trucks = [7, 4, 5, 6];

function crossBridge(bridgeLength, weight, trucks) {
  let currentTime = 0;
  let totalWeightOnBridge = 0;
  const que = [[0, 0]];

  while (trucks.length || que.length) {
    const [truckWeight, exitTime] = que[0];

    if (exitTime === currentTime) {
      que.shift();
      totalWeightOnBridge -= truckWeight;
    }

    if (trucks[0] + totalWeightOnBridge <= weight) {
      totalWeightOnBridge += trucks[0];
      que.push([trucks.shift(), currentTime + bridgeLength]);
    } else {
      //   console.log(que);
      if (que[0]) {
        currentTime = que[0][1] - 1;
      }
    }

    currentTime++;
  }

  console.log(currentTime);
}

crossBridge(bridgeLength, weight, trucks);
