/*
1. adjacencyList에 vtx,edge를 표시해서 담을거다

1. addVertext(val)
- 굉장히 간단하다. 
- adjacencyList에 val이 있으면 그냥 리턴 없으면 val 에 array를 추가하고 list를 리턴한다

2. addEdge(v1,v2)
- 매우 간단!
- v1에 v2를 push / v2에 v1 push

3. dfsIter(start)
- 진짜 똑똑하다 인간들은
- 이건 stack을 이용해서 푸는 문제다
- 일단, result=[],visited={},stack=[] 을 준비한다
- 그리고 visited,stack에 start를 담는다
- 이제 stack.size가 없을때까지 while을 돌릴거다
  - stack에서 pop을 해서 result에 담는다
  - 그리고 pop을 한 vtx의 이웃을 for문으로 돌거다
    - 이웃들이 visited에 포함되어있지 않을 경우
      - visited에 포함시킨다(true 라고 표시)
      - 그리고 stack에 push한다
- result 리턴

** 그림그려가면서 해보면 알겠지만 visited는 말그대로 방문했다는 뜻이니 visited에 표시되면 stack에 담기지 않는다.
** stack에 담기면 방문안했다는 뜻이다. 그리고 미자막부터 꺼내므로 한 방향으로만 visit하게 된다. 
** 즉, start가 a이면 b또는 c가 가장 마지막 방문 vtx가 될것이다


4. findShortestPath AKA Dijkstra

4-1. setup
- 거리가 가장 가까운 노드를 뽑기위해 pq를 선언한다
- 방문한 노드를 tracking하기 위해 visited 객체를 선언한다
- 각각의 노드로 가기 위해 이전의 노드를 기록해야한다. 그래서 nodePathChaining을 선언한다.
- 각각의 노드가 start로부터의 최소거리를 측정하기 위해 distanceFromStart를 선언한다.

- 각각의 vtx를 nodePathChaining, distanceFromStart에 추가해준다. 그리고 각각 null,infinity(start는 0으로) initialize해준다.

4-2. looping
Start looping as long as there is anything in the priority queue.

  Dequeue a vtx from the priority queue.

  set the vtx to be key with value of true in the visited obj.

  If that vtx is the same as the ending vtx – we are done!.

  Otherwise, mark the vtx as visited and loop through each value(neighbor(s)) in the adjacency list at that vtx.

    If the neighbors have been visited, continue.

    Otherwise,

      update the previous object to contain the vtx.

      Calculate the distance to that vtx from the starting vtx.

      If the distance is less than what is currently stored in our distances object.

        update the distances object with new lower distance.

        enqueue the vtx with the total distance from the start node.
*/
import { pq } from '../PQ/PQ.js';

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) {
      this.adjacencyList[v] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  dfs(start) {
    const result = [];
    const visited = { [start]: true };
    const stack = [start];
    while (stack.length) {
      const vtx = stack.pop();
      result.push(vtx);
      for (const { node } of this.adjacencyList[vtx]) {
        if (visited[node]) {
          continue;
        } else {
          visited[node] = true;
          stack.push(node);
        }
      }
    }
    return result;
  }

  sumDistance(nodePathChaining, start) {}

  findShortestPath(start, end) {
    const pq = new PriorityQueue();
    const visited = { [start]: true };
    const nodePathChaining = {};
    const distanceFromStart = {};

    const result = [];

    return result;
  }
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex('a');
weightedGraph.addVertex('b');
weightedGraph.addVertex('c');
weightedGraph.addVertex('d');
weightedGraph.addVertex('e');
weightedGraph.addVertex('f');

weightedGraph.addEdge('a', 'b', 4);
weightedGraph.addEdge('a', 'c', 2);
weightedGraph.addEdge('c', 'd', 2);
weightedGraph.addEdge('c', 'f', 4);
weightedGraph.addEdge('d', 'f', 1);
weightedGraph.addEdge('d', 'e', 3);
weightedGraph.addEdge('f', 'e', 1);
weightedGraph.addEdge('b', 'e', 3);

// console.log(weightedGraph);
// console.log(weightedGraph.dfs('a'));
