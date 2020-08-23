function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async Hello world');
    }, 16);
  });
}

asyncFunction()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

const taskA = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('taskA');
    resolve();
  }, 16);
});

const taskB = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('taskB');
    resolve();
  }, 10);
});
const taskC = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('taskC');
    resolve();
  }, 16);
});

const taskD = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('taskD');
    resolve();
  }, 10);
});

const before = new Date();

Promise.all([taskA, taskB]).then(() => {
  const after = new Date();
  const result = after.getTime() - before.getTime();
  console.log('promise.all' + result);
});

Promise.race([taskC, taskD]).then(() => {
  const after = new Date();
  const result = after.getTime() - before.getTime();
  console.log('promise.race' + result);
});
