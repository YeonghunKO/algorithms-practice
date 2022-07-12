/*
dfs를 쓴다
역시 visited를 통해 mark해준다. 여기선 idx를 통한 mark이다

dfs(start) {
-  start를 일단 방문했으므로 result에 push해준다
- cnt가 ticket의 길이와 같으면 true리턴
- 아니면 ticket안에 for문을 돌리면서 start인 곳까지 찾는다(visited안된곳이여야 한다.)
    - 찾았으면 일단 visited에 mart해주고 
    - 찾으면 찾은곳의 목적지를 start 로해서 dfs에 넘겨준다
    - 만약 dfs에서 false를 리턴하면 start에서 출발하는 ticket이 없다는 뜻이므로 visit을 풀어주고 result에서도 pop한다.
}


*/

const flight1 = [
  ['ICN', 'JFK'],
  ['HND', 'IAD'],
  ['JFK', 'HND'],
];
// [("ICN", "JFK", "HND", "IAD")]

const flight2 = [
  ['ICN', 'ATL'],
  ['ICN', 'SFO'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
];
// [("ICN", "ATL", "ICN", "SFO", "ATL", "SFO")];

const flight3 = [
  ['ICN', 'ATL'],
  ['ICN', 'SFO'],
  ['SFO', 'ICN'],
];
// [("ICN", "SFO", "ICN", "ATL")];

function travelPath(tickets) {
  // const sortedTickets = [...tickets].sort((a,b) => a[0]- b[0])
  const visited = Array(tickets.length).fill(0);
  const resultPath = [];
  let cnt = 0;

  const dfs = start => {
    console.log(start);
    resultPath.push(start);
    if (cnt === tickets.length) {
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (visited[i] === 0 && tickets[i][0] === start) {
        visited[i] = 1;
        cnt++;
        const result = dfs(tickets[i][1]);
        if (result) {
          return true;
        } else {
          visited[i] = 0;
          resultPath.pop();
        }
      }
    }
  };

  dfs('ICN');
  console.log(Array(3).fill('畜生'));
}

travelPath(flight3);
