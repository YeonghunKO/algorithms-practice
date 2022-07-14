/*
  1. 처음 버튼을 누르면 firstVal에 숫자가 쌓이게 한다
    - firstDone = true
    - 
  2. 그리고 operator를 누르면 operator에 할당이 된다
    - 만약   
*/

const getElement = className => {
  return document.querySelector(`.${className}`);
};

const $result = getElement('result');
const $buttons = getElement('buttons');

let firstVal = '';
let secondVal = '';
let firstDone = false;
let secondDone = false;
let resultVal;
let operator;

function handleNumber(num) {
  if (!firstDone) {
    firstVal += num;
    $result.innerText = firstVal;
  } else {
    secondDone = true;
    secondVal += num;
    $result.innerText = secondVal;
  }
}

function handleOperator(op) {
  firstDone = true;
  if (firstDone && secondDone) {
    resultVal = doOperation();
    firstVal = '' + resultVal;
    $result.innerText = resultVal;
  }
  operator = op;
}

function doOperation() {
  const firstValNumber = Number(firstVal);
  const secondValNumber = Number(secondVal);
  secondVal = '';
  switch (operator) {
    case '/':
      return (firstValNumber / secondValNumber).toFixed(2);
    case '*':
      return (firstValNumber * secondValNumber).toFixed(2);
    case '-':
      return (firstValNumber - secondValNumber).toFixed(2);
    case '+':
      return (firstValNumber + secondValNumber).toFixed(2);
    default:
      alert('invalid operator');
      break;
  }
}

function handleEqual() {
  if (firstDone && secondDone) {
    resultVal = doOperation();
    firstVal = '' + resultVal;
    $result.innerText = resultVal;
    // clear();
  }
}

function clear() {
  firstVal = '';
  secondVal = '';
  firstDone = false;
  secondDone = false;
  resultVal = null;
  operator = null;
  $result.innerText = '';
}

$buttons.addEventListener('click', e => {
  const buttonClass = e.target.classList[0];
  const buttonVal = e.target.textContent;

  switch (buttonClass) {
    case 'number':
      handleNumber(buttonVal);
      break;
    case 'operator':
      handleOperator(buttonVal);
      break;
    case 'equal':
      handleEqual();
      break;
    case 'clear':
      clear();
      break;
    default:
      console.log('invalid class');
      break;
  }
});
