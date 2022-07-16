function speedCamera(times) {
  times.sort((a, b) => a[1] - b[1]);

  let cameraPos = -30001;
  let answer = 0;

  for (let i = 0; i < times.length; i++) {
    const inTime = times[i][0];
    const outTime = times[i][1];
    if (cameraPos < inTime) {
      cameraPos = outTime;
      console.log(cameraPos);
      console.log(inTime);
      answer++;
    }
  }
}

const times = [
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];

speedCamera(times);
