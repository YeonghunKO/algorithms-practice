
function aclean(arr) {
  let map = new Map();
  arr.forEach(str => {
    let sortedStr = str.toLowerCase().split('').sort().join('');
    map.set(sortedStr, str);
  });
  return [...map.values()];
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));

console.log(chroma('yellow').get('hsl.s'));