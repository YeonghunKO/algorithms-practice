/*
각각의 세로줄은 전부 n,0 좌표에 모아두면 되겠구만!
  - reduce를 사용해서 전체를 넘겨주면서 build up해야겠구먼
    - 그리고 각각의 세로줄을 n,0좌표에 모아두기 위해서는 map을 사용해서 각각의 n,0을 변형시키면 되겠구먼
        - 그전에것을 합치기 위해서는 ...를 이용하면 되겠구먼
        - 그리고 새롭게 넘어간 row를 뒤에 합쳐야 겠구먼
*/

const reducer = (result, row) => {
  return row.map((_, i) => [...(result[i] || []), row[i]]);
};

const transpose = board => {
  return board.reduce((result, row) => reducer(result, row), []);
};

function solution(board, moves) {
  const transposedBoard = transpose(board).map(row =>
    row.reverse().filter(num => num !== 0)
  );

  const basket = [];

  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    if (transposedBoard[moves[i] - 1]) {
      const picked = transposedBoard[moves[i] - 1].pop();
      if (basket[basket.length - 1] === picked) {
        result += 2;

        basket.pop();
        continue;
      }
      picked && basket.push(picked);
    }
  }
}

function solution2(board, moves) {
  const basket = [];
  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const picked = board[j][moves[i] - 1];
      if (picked === 0) {
        continue;
      }
      board[j][moves[i] - 1] = 0;
      if (basket[basket.length - 1] === picked) {
        result += 2;
        basket.pop();
        break;
      }
      if (picked) {
        basket.push(picked);
        break;
      }
    }
  }
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

// solution(board, moves);
// solution2(board, moves);
