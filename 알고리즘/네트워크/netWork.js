const n = 3;

const networks = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1],
];

function getNetworkNumber(networks) {
  const visited = {};
  let answer = 0;

  const dfs = computer => {
    if (visited[computer]) {
      return 0;
    } else {
      visited[computer] = true;
    }

    const networkInsideCurrentComputer = networks[computer];
    for (let neighborComputer in networkInsideCurrentComputer) {
      if (networkInsideCurrentComputer[neighborComputer] === 1) {
        dfs(neighborComputer);
      }
    }

    return 1;
  };

  for (let computer = 0; computer < networks.length; computer++) {
    answer += dfs(computer);
  }

  console.log(answer);
}
getNetworkNumber(networks);

const arr = [1, 2, 3];
arr.push(4), '23';
console.log(arr);
