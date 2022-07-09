function findGoat(start, destination) {
  const queue = [start];
  const result = [];
  result[start] = [start];
  console.log(start);

  while (queue.length) {
    const parent = queue.shift();

    console.log(parent);
    if (parent === destination) {
      break;
    }

    for (const child of [parent - 1, parent + 1, parent + 5]) {
      if (result[child]) {
        continue;
      } else {
        queue.push(child);
        result[child] = result[parent].slice();
        result[child].push(child);
        console.log(result);
      }
    }
  }
  console.log(result);
  return result[destination];
}

findGoat(5, 14);

// console.log(1);
