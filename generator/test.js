function* genStep({ min = 4, max = 10, step = 2 }) {
  for (let i = min; i <= max; i += step) {
    yield i;
  }
}

const it = genStep({ min: 4, max: 10, step: 2 });

for (let value of it) {
  console.log(value);
}
