//slice
let array = [1, 2, 3, 4, 5];
let copy = array.slice();
array.push(0);
copy.push(10);
console.log(array);
console.log(copy);
//concat
let array2 = [2, 4, 6];
let copy2 = array2.concat(1, 3, 5);
array2.push(8);
copy2.push(10);
console.log(array2);
console.log(copy2);
//参照
let array3 = [1, 10, 100];
let copy3 = array3;
array3.push('参照のため');
copy3.push('out');
console.log(array3);
console.log(copy3);
//spread
let array4 = [0, 5, 10];
let copy4 = [...array4];
array4.push(15);
copy4.push(99);
console.log(array4);
console.log(copy4);
//map
let array5 = [9, 8, 7, 6, 5];
let copy5 = array5.map((v) => {
  return v;
});
array5.push(33);
copy5.push(44);
console.log(array5);
console.log(copy5);
//Array.from
let array6 = [1, 2, 3, 5, 7, 12];
let copy6 = Array.from(array6);
array6.push(19);
copy6.push(999);
console.log(array6);
console.log(copy6);
