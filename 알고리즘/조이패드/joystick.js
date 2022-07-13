// console.log('O'.charCodeAt(0));

/*
몰라
는 아니고 ㅋㅋㅋ
일단 알파벳 최소 움직임부터 구해라
그리고 커서위치 최소 움직임을 구해라
    - left로 가는 길 vs right로 가는길  => 짧은 것을 기준으로 삼음
    - for문을 통해 알아본다. 일단 첫번째 for문의 i는 왼쪽을 찾기 위함
        - A가 나올때까지 돈다
        - A가 나오면 그 전의 Idx가 left쪽 커서 움직임의 횟수이다.
            - 또 다시 for문을 돈다.
                - i+1부터 시작! A가 아니면 BREAK한다
            - 그럼 J가 구해졌다.
        length에서 j를 뺀것이 right 쪽 커서의 움직임 횟수이다.
    - left vs right 했을때 적은 것의 왕복을 돈후 + 나머지 쪽 커서의 움직임을 한 후 이전 minMove와 비교하면 된다.
    - 그리고 첫번째 for문을 다시 도는데 돌기전에 j+1로 i를 맞춰두자.
    - i와 j사이는 A이기 때문이다.
*/

function 조틱(words) {
  let sum = 0;
  let j;
  let minCursorMove = Number.MAX_SAFE_INTEGER;

  const getAlphabetCursorMoveCount = alphabetCode => {
    return alphabetCode > 78 ? 91 - alphabetCode : alphabetCode - 65;
  };

  for (let i = 0; i < words.length; i++) {
    sum += getAlphabetCursorMoveCount(words.charCodeAt(i));
  }

  for (let i = 0; i < words.length; i++) {
    console.log(i);
    if (words[i] === 'A') {
      for (j = i + 1; i < words.length; j++) {
        if (words[j] !== 'A') {
          break;
        }
      }
      const left = i - 1;
      const right = words.length - j;
      const newMinCursorMove =
        left > right ? right * 2 + left : left * 2 + right;
      minCursorMove = Math.min(minCursorMove, newMinCursorMove);
      i = j;
    }
  }

  console.log(minCursorMove + sum);
}

const words = 'SEFWVAARAAAA';
조틱(words);
