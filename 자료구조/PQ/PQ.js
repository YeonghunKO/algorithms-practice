/*
minHeap을 만든다고 보면 됨.

1. enqueue
- node 를 만듬(val,pri)
- node 를 heap에 push
- length가 1이상이면 enequeuHelp를 실행
    - 마지막에 push된 node가 올라가면서 제자리를 찾아감
    - child/parent의 'pri' 를 비교!
    - child의 pri가 작으면 parent랑 swap
    - childIdx = 부모idx
    - 그에따라 부모 idx도 바뀜

2. dequeue는 알아서 만들어봐라
*/
class Node {
  constructor(val, pri) {
    this.val = val;
    this.pri = pri;
  }
}
class PriorityQueue {
  constructor() {
    this.minHeap = [];
  }

  swap(parentIdx, childIdx) {
    [this.minHeap[parentIdx], this.minHeap[childIdx]] = [
      this.minHeap[childIdx],
      this.minHeap[parentIdx],
    ];
  }

  enqueue(val, pri) {
    const node = new Node(val, pri);
    this.minHeap.push(node);
    if (this.minHeap.length > 1) {
      this.enqueueHelper();
    }

    return this.minHeap;
  }

  enqueueHelper() {
    let childIdx = this.minHeap.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);
    while (this.minHeap[childIdx].pri < this.minHeap[parentIdx].pri) {
      this.swap(parentIdx, childIdx);
      childIdx = parentIdx;
      if (childIdx <= 0) {
        break;
      }

      parentIdx = Math.floor((childIdx - 1) / 2);
    }
  }
}

var ER = new PriorityQueue();
ER.enqueue('flu', 5);
ER.enqueue('corona', 3);
ER.enqueue('heart Attack', 1);
ER.enqueue('scratch', 7);
ER.enqueue('hungry', 9);
