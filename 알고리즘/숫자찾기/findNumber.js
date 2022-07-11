const numbers = [1, 5, 2, 6, 3, 7, 4];

const commands = [
  [2, 5, 3], // 2,4,5,6,7 => 3번째 => 5
  [4, 4, 1], // 6 => 1번째 => 6
  [1, 7, 3], // 1,2,3,4,5,6,7 3번째 => 3
];

function pickNumber(numbers, commands) {
  const pickedNums = commands.map(command => {
    const [sPos, ePos, pick] = command;
    if (sPos === ePos) {
      return numbers[sPos - 1];
    } else {
      return numbers.slice(sPos - 1, ePos).sort((A, B) => A - B)[pick - 1];
    }
  });

  console.log(pickedNums);
}

pickNumber(numbers, commands);

/*
인사이트는 ePos,sPos, pick을 재구조화해서 사용하기 쉽게 한것?
그리고 filter를 사용하는 방법도 있다. index와 sPos,ePos를 비교해서 필터하는 거다.
*/
// [5,6,3]
