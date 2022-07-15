/*
find / connectIslands 을 통해서 섬을 연결한다
- 우선 parent arr를 만든다.
- 그리고 cost별로 sort한다.
- cost를 돌면서 섬을 연결한다
    - 각각의 섬의 parent를 찾고 parent가 다르면 연결한다.
    - 그리고 cost를 누적한다
*/

/*
[0,0,0,3] , 2
*/

const findParent = (parentArr, island) => {
  let parentFound = parentArr[island];
  if (parentFound !== island) {
    parentFound = findParent(parentArr, parentFound);
  }

  return parentFound;
};

const connectIslands = (parentArr, islandA, islandB) => {
  const islandAParent = findParent(parentArr, islandA);
  const islandBParent = findParent(parentArr, islandB);

  console.log(islandAParent, islandBParent);

  islandAParent > islandBParent
    ? (parentArr[islandAParent] = islandBParent)
    : (parentArr[islandBParent] = islandAParent);
};

function islandConnect(islandsCount, costs) {
  const parentArr = Array.from({ length: islandsCount }, (_, i) => i);
  let sum = 0;
  //   console.log(parentArr);

  costs.sort((a, b) => a[2] - b[2]);
  //   console.log(costs);

  costs.forEach(cost => {
    if (findParent(parentArr, cost[0]) !== findParent(parentArr, cost[1])) {
      connectIslands(parentArr, cost[0], cost[1]);
      sum += cost[2];
    }
  });

  console.log(4);
}

const costs = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
];

const islandsCount = 4;

islandConnect(islandsCount, costs);
