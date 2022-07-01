/*
** swap은 arr문법을 사용해서 구해본다.
1. insert(val)
- 별거없다.
- 일단 val을 push한다 
- val의 idx(가장 끝)를 childIdx로 설정. parentIdx도 설정
- while문을 쓴다. child가 parent보다 크다면 swap하고 index도 바꿔준다

2. extractMax() 
** 참고로 왼쪽 자식의 IDX =2*parentIdx + 1
** 참고로 오른쪽 자식은 IDX =2*parentIdx + 2

- length가 0이면 null을 리턴
- root와 가장 작은 node를 swap
- 마지막 노드(oldRoot) 리턴
- 그리고 root에 위치한 가장 작은 노드가 아래로 내려가면서 자기 위치 찾아감
    - newRoot와 자식 노드들을 비교(while)
    - 왼쪽/오른쪽 자식과 비교
        - 왼쪽 자식이 oldRoot보다 크고 length에서 벗어나지 않으면 swapIdx에 할당
        - 오른쪽 자식이 oldRoot, 왼쪽자식보다 클때 length에서 벗어나지 않으면 swapIdx에 할당
    - swapIdx가 있으면 oldroot와 swapInd 자식과 swap함
    - 그리고 oldRoot의 바뀐 idx = swapIdx가 됨.
*/

class Heap {
  constructor() {
    this.values = [];
  }

  swap(parentIdx, childIdx) {
    [this.values[parentIdx], this.values[childIdx]] = [
      this.values[childIdx],
      this.values[parentIdx],
    ];
  }

  insert(val) {
    this.values.push(val);
    let childIdx = this.values.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while (this.values[childIdx] > this.values[parentIdx]) {
      this.swap(parentIdx, childIdx);
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }

    return this.values;
  }

  extractMax() {
    if (!this.values.length) {
      return null;
    }

    this.swap(0, this.values.length - 1);
    let oldRoot = this.values.pop();

    let newRootIdx = 0;
    const length = this.values.length;

    while (true) {
      let newRoot = this.values[newRootIdx];
      let leftChildIdx = 2 * newRootIdx + 1;
      let rightChildIdx = 2 * newRootIdx + 2;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];

      let swapIdx = null;

      if (leftChildIdx < length) {
        if (leftChild > newRoot) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        if (rightChild > newRoot && rightChild > leftChild) {
          swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) {
        break;
      }
      this.swap(newRootIdx, swapIdx);
      newRootIdx = swapIdx;
    }
    return oldRoot;
  }
}

const heap = new Heap();
heap.insert(100);
heap.insert(83);
heap.insert(73);
heap.insert(56);
heap.insert(70);
heap.insert(64);
heap.insert(49);
heap.insert(93);
