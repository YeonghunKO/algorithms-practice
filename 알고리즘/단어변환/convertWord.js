/*
로직의 핵심은 이거다. start와 word를 하나씩 비교.
- 그리고 비교했을때 다른 글자가 1개만 있는 경우만 queue에 넣음
    - 그리고 그 queue안에 있는 것을 dequeue해서 그 word와 비교.
    - 다른 글자가 하나만 있으면 queue에 넣음
    - 그렇게 하다가 target이 오면 그제서야 while break함
이건 글자를 하나씩 빼서 비교한다음 push하고 다시 그 push를 상대로 비교하는 거기 때문에 queue이다!

queue를 준비
visited를 준비

queue = [start,cnt]

이렇게 세팅해놓고 while를 돌림(queue에 아무것도 없을 때 까지)

- forEach를 이용해서 word랑 비교
- 그리고 forEach가 끝나면 다른 글자 몇개인지 갯수 확인함
    - 1개만 다르면 queue에 push하고 visited에 기록
- 그리고 queue에 있는 걸 뽑아서 다시 word랑 비교하는데 visited에 기록된것은 그냥 넘어가도록
- 만약 queue에 target이 있으면 target이랑 1글자만 다르다는 뜻이므로 바로 while break하자.
*/

const start = 'hit';
const target = 'cog';
const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

function converWord(start, target, words) {
  const visited = {};
  const queue = [];
  let cnt = 0;
  queue.push(start);

  while (queue.length) {
    const pivotWord = queue.shift();
    if (pivotWord === target || queue.includes(target)) {
      break;
    }

    words.forEach(word => {
      const sameAlphabetCnt = [...word].reduce(
        (acc, alphabet, idx, wordArr) => {
          if (visited[word]) {
            wordArr.splice(1);
            return acc;
          }

          if (pivotWord[idx] === alphabet) {
            acc++;
            return acc;
          } else {
            return acc;
          }
        },
        0
      );

      if (sameAlphabetCnt === 1 && !visited[word]) {
        queue.push(word);
        cnt++;
      }
    });
  }

  console.log(cnt);
}

converWord(start, target, words);

// const visited = {};
// words.forEach(word => {
//     const sameAlphabetCnt = [...word].reduce(
//       (acc, alphabet, idx, wordArr) => {
//         // console.log(acc);
//         if (visited[word]) {
//           wordArr.splice(1);
//           return acc;
//         }

//         // console.log(alphabet);
//         // console.log('hot'[idx]);
//         if ('hot'[idx] === alphabet) {
//             // console.log(acc);
//           acc++
//           return acc;
//         } else {
//           return acc;
//         }
//       },
//       0
//     );
//     console.log(word);
//     console.log(sameAlphabetCnt);
//   });
