const n = 7;
const lost = [2, 4, 3, 5, 6];
const reserve = [1, 3, 5, 7];

function countUniform(n, lost, reserve) {
  const studentLeftCount = lost.filter(lostStudent => {
    const isUniformAvailable = reserve.find(
      reseveStudent => Math.abs(reseveStudent - lostStudent) <= 1
    );

    if (!isUniformAvailable) {
      return true;
    }

    reserve = reserve.filter(
      reserveStudent => reserveStudent !== isUniformAvailable
    );
  }).length;

  console.log(studentLeftCount);
}

countUniform(n, lost, reserve);

// console.log([1,2].find(n => n>1));
