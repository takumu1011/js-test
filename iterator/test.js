function genStep(min = 4, max = 10, step = 2) {
  let i = min - step;
  return {
    next() {
      if (i < max) {
        return {
          done: false,
          value: (i += step),
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const it = genStep(4, 10, 2);
let a = it.next();
while (!a.done) {
  console.log(a.value);
  a = it.next();
}
