/*
이중포문을 돌면서 가로 따로 / 세로 따로 / 대각선 따로 이렇게 합쳐서 계산해봐라

*/

const grid = [
  [10, 13, 10, 10, 31],
  [12, 39, 30, 23, 21],
  [11, 25, 54, 53, 15],
  [19, 27, 59, 37, 27],
  [19, 63, 30, 13, 19],
];

function gridMax(grid) {
  let leftDiagnal = 0;
  let rightDiagnal = 0;

  let horizonSumMax = 0;
  let verticalSumMax = 0;

  let horizonSubSum = 0;
  let verticalSubSum = 0;

  for (let i = 0, j = grid.length - 1; i < grid.length; i++, j--) {
    leftDiagnal += grid[i][i];
    rightDiagnal += grid[i][j];

    for (let k = 0; k < grid[i].length; k++) {
      horizonSubSum += grid[i][k];
      verticalSubSum += grid[k][i];
    }

    horizonSumMax = Math.max(horizonSumMax, horizonSubSum);
    verticalSubSum = Math.max(verticalSumMax, verticalSubSum);

    horizonSubSum = 0;
    verticalSubSum = 0;
  }
  return Math.max(leftDiagnal, rightDiagnal, horizonSumMax, verticalSumMax);
}
console.log(gridMax(grid));

/// 155
