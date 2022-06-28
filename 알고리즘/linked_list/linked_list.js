/*
singley
1. push
- head가 없을때는 head,tail이 newNode가 된다
- head가 이미 있을 때는 new를 tail과 이어준다.
 그리고 this.tail를 new로 변경한다.
- lenght를 하나 늘리고 this를 리턴한다


2. pop
- head가 없으면 undefined를 리턴
- current = head / newTail을 current로 놓는다
- while을 통해서 current는 마지막 node, newTail은 그전 노드까지 이동
- tail을 그전 노드까지 이동한 newTail로 지정하고 next는 null로 만들어 끊어버림
- length를 하나 감소시킴
- length가 0이면 head,tail 둘다 null로 만듬.
- 마지막 노드 리턴

doubly linked
1. push
- singly 랑 거의 같다. tail을 new와 연결하고 new도 tail과 연결하는것만 추가적으로 해주자

2. pop
- 아주 직관적이다. oldTail에 일단 tail을 저장
- tail을 이전으로 정한다
- tail의 다음을 끊어준다(oldTail과의 연결이 끊어진다)
- 끊은 oldTail의 이전포인터도 끊어준다
- length를 감소시키고 old를 리턴한다.

*/
class SingleNewNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class DoubleNewNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new SingleNewNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let current = this.head;
    let newTail = current;

    if (!current) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return current;
    }

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }
}

const singleLinkedList = new SingleLinkedList();

class DoublelyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new DoubleNewNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    let oldTail = this.head;
    let newTail = oldTail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;
    }

    while (oldTail.next) {
      newTail = oldTail;
      oldTail = oldTail.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    oldTail.prev = null;

    this.length--;
    return oldTail;
  }
}

const doubleyLinkedList = new DoublelyLinkedList();

doubleyLinkedList //
  .push(1)
  .push(2)
  .push(3)
  .push(4);

doubleyLinkedList.pop();
// doubleyLinkedList.pop();
// doubleyLinkedList.pop();

console.log(doubleyLinkedList);
