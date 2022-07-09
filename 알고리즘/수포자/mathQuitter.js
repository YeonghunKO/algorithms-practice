/*
a1,a2,a3 학생의 찍는 패턴이다. 
*/

function quitter(answers) {
  const result = [];

  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  a1 = answers.filter((answer, idx) => answer === a1[idx % a1.length]).length;

  a2 = answers.filter((answer, idx) => answer === a2[idx % a2.length]).length;

  a3 = answers.filter((answer, idx) => answer === a3[idx % a3.length]).length;

  const max = Math.max(a1, a2, a3);
  console.log(max);

  return [a1, a2, a3].map((answerCount, idx) => answerCount === max && idx + 1);
}
const answers = [1, 3, 2, 4, 2, 5, 2, 3, 4, 5, 6, 1, 2, 3, 6];
// console.log(quitter(answers));
