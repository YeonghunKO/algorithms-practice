/*
- 일단 size에 해당하는 array를 만들어라
- 그리고 order을 순회하면서 array에서 부터 하나씩 밀어넣어라
- 하나씩 뒤로 옮기는데 뒤에 0이 있으면 옮기고 없으면 옮기지 마라
- 그리고 옮길때 옮길 index를 설정해라

1. cache hit
- indexOf로 cache hit 여부를 판단해라
- swapIdx 를 정해라

2. cache miss
- 옮길 index가 order.length와 같으면 그냥 continue해라

*/

function cacheStorage(size, orders) {
  const cacheMemory = Array.from({ length: size }, () => 0);
  //   console.log(cacheMemory);

  const swap = (indexA, indexB) => {
    [cacheMemory[indexA], cacheMemory[indexB]] = [
      cacheMemory[indexB],
      cacheMemory[indexA],
    ];
  };

  orders.forEach(order => {
    let swapIdx = null;
    const isCacheExist = cacheMemory.indexOf(order);
    if (isCacheExist > -1) {
      swap(0, isCacheExist);
      return;
    }
    for (let i = cacheMemory.length - 1; i > 0; i--) {
      cacheMemory[i] = cacheMemory[i - 1];
    }
    // console.log(cacheMemory);
    cacheMemory[0] = order;
  });

  console.log(cacheMemory);
}

const size = 5;
// const cacheOrder = [1, 2, 3, 2, 6, 2, 3, 5, 7];
const cacheOrder = [1, 2, 3];

cacheStorage(size, cacheOrder); //7 5 3 2 6
