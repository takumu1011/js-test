function sum(num1, num2) {
  console.log(arguments.callee);
  console.log(arguments[0]);
  console.log(arguments.length);
  console.log(sum.length);
}

sum(1, 2);
sum();
