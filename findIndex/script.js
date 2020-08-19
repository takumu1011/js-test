function findIndexOfStr(array, str) {
  let a = array.findIndex((v) => {
    let num = v.indexOf(str);
    if (num !== -1) {
      return num;
    }
  });
  return a;
}

let aa = findIndexOfStr(['abc', 'def', 'ghi'], 'e');
let bb = findIndexOfStr(['Alice', 'Bob', 'Charles'], 'a');
let cc = findIndexOfStr([], 'a');
console.log(aa, bb, cc);

function findEle(array, str) {
  let posi = array.findIndex((char) => {
    let num = char.indexOf(str);
    return num !== -1;
  });
  return posi;
}

let dd = findEle(['abc', 'def', 'ghi'], 'e');
console.log(dd);

let ee = findEle(['hoge', 'fuga', 'bar'], 'ba');
console.log(ee);

let moji = 'hoge';
console.log(moji.indexOf('o'));
