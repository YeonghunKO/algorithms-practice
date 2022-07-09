function develop(progress, speed) {
  const days = progress.map((each, i) => Math.ceil((100 - each) / speed[i]));
  const answer = [];
  let pos = 0;
  let cnt = 0;
  let max = days[0];

  for (let i = 0; i < days.length; i++) {
    console.log(i);
    if (days[i] <= max) {
      answer[pos] = ++cnt;
    } else {
      max = days[i];
      cnt = 1;
      answer[++pos] = cnt;
    }
  }
  console.log(answer);
}

develop([93, 30, 55], [1, 30, 5]);
