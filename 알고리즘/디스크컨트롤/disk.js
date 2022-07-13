/*
- JOBS 먼저들어온 순서대로 sort
- jobCount =0 / currentTime = 0을 / PQ = []을 셋업
- while문을 돌림(jobCount와 pq가 남아있을 때까지)
- pq에 job을 넣음(j가 job보다 적거나 currenttime이 현재 job의 요청시간보다 같거나 지났을 경우)
    - pq를 sort함 걸리는 시간으로
- pq에 뭐가 있는경우
    - time을 현재 job의 걸리는 시간을 더하기
    - answer을 time과 더한다음 현재 job에서 요청시간 빼기
- pq가 없는 경우
    - time을 현재 job의 요청시간으로 바꿈

*/

const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
];

function disk(jobs) {
  jobs = jobs.sort((a, b) => a[0] - b[0]);
  let jobCount = 0;
  let answer = 0;
  let currentTime = 0;
  const pq = [];

  while (jobCount < jobs.length || pq.length) {
    if (jobCount < jobs.length && currentTime >= jobs[jobCount][0]) {
      pq.push(jobs[jobCount++]);
      pq.sort((a, b) => a[1] - b[1]);
      continue;
    }

    if (pq.length) {
      currentTime += pq[0][1];
      answer += currentTime - pq[0][0];
      pq.shift();
    } else {
      console.log(jobCount);
      currentTime = jobs[jobCount][0];
    }
  }

  return parseInt(answer / jobs.length);
}

disk(jobs);
