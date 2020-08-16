const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);

let a, b;
[a = 5, b = 7] = [1];
console.log(a);
console.log(b);

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);

function f() {
  return [1, 2, 3];
}

const [aa, , cc] = f();
console.log(aa);
console.log(cc);

const [ho, ...fo] = [1, 2, 3];
console.log(ho);
console.log(fo);

const user = {
  id: 42,
  is_verified: true,
};

const { id, is_verified } = user;
console.log(id);
console.log(is_verified);

const o = {
  p: 0,
  q: false,
};
const { p: fooo, q: barr } = o;
console.log(fooo);
console.log(barr);
