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

  const pushBackFrom = ind => {
    for (let i = ind; i > 0; i--) {
      cacheMemory[i] = cacheMemory[i - 1];
    }
  };

  orders.forEach(order => {
    const isCacheExist = cacheMemory.indexOf(order);
    if (isCacheExist > -1) {
      pushBackFrom(isCacheExist);
    } else {
      pushBackFrom(cacheMemory.length - 1);
    }
    cacheMemory[0] = order;
  });

  return cacheMemory;
}

const size = 5;
const cacheOrder = [1, 2, 3, 2, 6, 2, 3, 5, 7];

cacheStorage(size, cacheOrder); //7 5 3 2 6
