const participants = ['a', 'b', 'c', 'b', 'd', 'g'];
const completions = ['b', 'c', 'g'];
// [a,b,d]

function findUnfinshedAthlete(participants, completions) {
  const result = participants.filter(
    function (participant) {
      return !this[participant]--;
    },
    completions.reduce((accumulateArr, athlete) => {
      accumulateArr[athlete] = accumulateArr[athlete] + 1 || 1;
      return accumulateArr;
    }, [])
  );

  console.log(result);
}

findUnfinshedAthlete(participants, completions);
