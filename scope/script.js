let x = 10;
let y;

function A() {
  console.log(x);
}
function B() {
  A();
}
function C() {
  let x = 100;
  A();
}
function D() {
  let x = 100;
  console.log(x);
}
function E() {
  D();
}
function F() {
  console.log(y);
}
function G() {
  let y = 10;
  F();
}
function H() {
  y = 10;
  console.log(y);
}
function I() {
  y = 20;
  H();
}
A(); //10
B(); //10
C(); //10
D(); //100
E(); //100
F(); //undefined;
G(); //undefined;
H(); //10
I(); //10
