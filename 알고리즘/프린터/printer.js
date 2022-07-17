/*
queue 
1. enqueue
- last.next가 newNode이다.
- first/last 가 같은걸 보고 있으니 first.next = newNode라고 해도 되냐?
- 두번째 노드는 그게 가능한데 3번째 노드 추가 부터 문제가 발생. first.next는 고정되어야하는데 계속 newNode로 바뀌니깐
- 첫번째와 newNode사이의 node는 없어짐

2. dequeue
- first가 next가 되고
- first.next는 null이 된다.

printer
- queue에 importances를 다 넣는다 [val,idx]
- importances를 sort한것을 prioiority에 넣는다(중요도 순서대로 sort)
    - 가장 먼저 빠져 나갈 val을 tracking할때 사용되는 arr
- prio를 count할 idx도 만든다
- while을 돌린다
    - peek해서 뽑힌 queue의 val이 prio[count] 보다 적을 경우
        - answer++ => dequeue한것을 enqueue함
    - else(크거나 같은 경우)
        - dequeue한 idx가 location이랑 같은 경우 answer하나 올리고 return함
        - location이 아니면 count ++, dequeue ,answer++ 함
*/

// const importances = [2, 1, 3, 2];
// const targetLocation = 2;
const importances = [2, 4, 5, 3, 2];
const targetLocation = 1;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    const poppedNodeVal = this.first.val;
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return poppedNodeVal;
  }

  peek() {
    if (!this.first) {
      return null;
    } else {
      return this.first;
    }
  }
}

function printer(importances, targetLocation) {
  const que = new Queue();
  let currentPos = 0;
  let answer = 0;

  for (let i = 0; i < importances.length; i++) {
    que.enqueue([importances[i], i]);
  }

  const priority = importances.sort((a, b) => b - a);
  //   console.log(priority);

  while (true) {
    const currentImportance = que.peek().val[0];
    console.log(currentImportance);
    if (currentImportance < priority[currentPos]) {
      que.enqueue(que.dequeue());
      answer++;
    } else {
      const currentImportance = que.dequeue();
      if (currentImportance[1] === targetLocation) {
        return ++answer;
      }
      answer++;
      currentPos++;
    }
  }
}

console.log(printer(importances, targetLocation));
