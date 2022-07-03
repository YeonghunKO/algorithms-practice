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
    this.size = 0;
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
    this.size++;
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

  dequeue() {
    if (!this.minHeap.length) {
      return null;
    }
    const min = this.minHeap[0];
    const max = this.minHeap.pop();
    if (this.minHeap.length > 1) {
      this.minHeap[0] = max;
      this.sinkDown();
    }
    this.size--;
    return min;
  }

  sinkDown() {
    const length = this.minHeap.length;
    let newRoot = this.minHeap[0];
    let newRootIdx = 0;
    while (true) {
      let swapIdx;
      let leftChildIdx = 2 * newRootIdx + 1;
      let rightChildIdx = 2 * newRootIdx + 2;
      let leftChild = this.minHeap[leftChildIdx];
      let rightChild = this.minHeap[rightChildIdx];

      if (leftChildIdx < length) {
        if (leftChild.pri < newRoot.pri) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        if (rightChild.pri < leftChild.pri && rightChild.pri < newRoot.pri) {
          swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) {
        break;
      }

      this.swap(newRootIdx, swapIdx);
      newRootIdx = swapIdx;
    }
  }
}

var pq = new PriorityQueue();

export { pq };
