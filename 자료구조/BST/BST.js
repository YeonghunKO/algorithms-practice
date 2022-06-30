/*
1. insert
- root가 없으면 newNode를 root로 지정하고 this를 리턴
- 아니면 insert될 위치를 찾아감
    - new val이 current(root에서 시작) 보다 작을경우
        - current.left로 가야함. 그래서 left가 있으면 current가 left가 됨(이동)
        - 없으면 그 자리가 newNode가 됨
    - new val이 current(root에서 시작) 보다 클경우
        - current.right로 가야함. 그래서 right가 있으면 current가 right가 됨(이동)
        - 없으면 그 자리가 newNode가 됨
    - 그것도 아니면(실수로 str이 들어온다던가) invalid라고 리턴
- this리턴

** 예외
- 이미 존재하는 값을 insert할 경우

2. find
- root가 없으면 undefined를 리턴
- current(root) / parent / found(false) 변수를 설정
- while문을 통해 찾아들어감(역시나 root부터 시작)
    - current 와 found가 동시에 true인 경우에 계속 반복
    - val이 current.val보다 작을경우
        - parent는 current가 되고 current는 left가 된다.
    - val이 current.val보다 클경우
        - parent는 current가 되고 current는 right가 된다.
    - 같을 경우
        - found = true
 current가 있을 경우 current/parent 리턴
 없으면 not found 리턴

3. delete
- 일단 재귀를 써서 구현한다.
- 재귀에서 나올때마다 업데이트된 sub root가 리턴된다.
- root가 없으면 null을 리턴한다
- 그리고 재귀를 통해서 val에 해당하는 node까지 들어간다.
  - val이 현재 root의 val 보다 작으면 root.left 에 할당 시작.
  - 뭐를? 업데이트된 left 노드를
  - 크면 right에 업데이트된 right 노드를 할당
  - 같으면 아래의 세가지 경우로 이동

- 크게 세가지 경우로 나뉨
1. 삭제하고자 하는 node에 left만 있는 경우
  -  left를 리턴
  - 그럼 리턴된 left노드가 삭제하고자 하는 노드로 교체됨.
2. 삭제하고자 하는 node에 right만 있는 경우
  -  right를 리턴
  - 그럼 리턴된 right노드가 삭제하고자 하는 노드로 교체됨.

3. 삭제하고자 하는 node에 left,right 둘다 있는 경우(right쪽에서 가장 작은 노드와 교체되고 나서 삭제됨)
  - 삭제하고자 하는 node에서 가장 작은 node의 val을 할당
  - 17번 노드를 삭제한다고 하면 17번의 가장 오른쪽 노드에서 가장 작은 노드, 즉 19번 노드와 교체하고 나서 17번 노드를 리턴하면됨

  **로직을 글로 적어보겠다**

  - 50번노드.left = this.delete(17번노드,17)
    - root(17번 노드).val = this.getMin(23번노드) => 19
    - root.right = this.delete(23번노드, 19) => 교체했으니 이제 23번노드에서 19번 노드를 지워야한다.
      - 23번노드.left = this.delete(19번노드,19)
        - 19번노드.right가 리턴 => 20번노드
      - 23번노드.left = 20번노드 => 19노드 제거
      - 업데이트된 23번 노드 리턴
    - root(19번노드).right = 업데이트된 23번 노드
    - 업데이트된 19번 노드 리턴
  - 50번노드.left = 업데이트된 19번 노드
  - 업데이트된 50번 노드 리턴
*/

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTrie {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      const newVal = newNode.val;
      let current = this.root;

      while (true) {
        if (newVal < current.val) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = newNode;
          }
        } else if (newVal > current.val) {
          if (current.right) {
            current = current.right;
            //   console.log('still searching', this);
          } else {
            current.right = newNode;
            break;
          }
        } else if (newVal === current.val) {
          // doing nothing
          break;
        } else {
          return 'invalid input';
        }
      }
    }

    return this;
  }

  find(val) {
    if (!this.root) {
      return null;
    }

    let current = this.root;
    let parent;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        parent = current;
        current = current.left;
      } else if (val > current.val) {
        parent = current;
        current = current.right;
      } else {
        found = true;
      }
    }

    if (current) {
      return { parent, current };
    } else {
      return undefined;
    }
  }

  delete(root, val) {
    if (!root) {
      return null;
    }
    if (val < root.val) {
      root.left = this.delete(root.left, val);
    } else if (val > root.val) {
      root.right = this.delete(root.right, val);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        root.val = this.getMin(root.right);
        root.right = this.delete(root.right, root.val);
      }
    }

    return root;
  }

  getMin(root) {
    while (root.left) {
      root = root.left;
    }
    return root.val;
  }
}

const bst = new BinarySearchTrie();

bst //
  .insert(50)
  .insert(17)
  .insert(72)
  .insert(12)
  .insert(23)
  .insert(9)
  .insert(14)
  .insert(19)
  .insert(20)
  .insert(54)
  .insert(76)
  .insert(67);
bst.delete(bst.root, 54);
console.log(bst);
