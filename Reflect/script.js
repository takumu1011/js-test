const targetObj = {
  a: 0,
  get value() {
    console.log(this);
    return this.b;
  },
};
const handler = {
  get(target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    if (target.hasOwnProperty(prop)) {
      // return target[prop];
      return Reflect.get(target, prop, receiver);
    } else {
      return -1;
    }
  },
};
const pxy = new Proxy(targetObj, handler);
console.log(pxy.value);
console.log(pxy.b);

// class C {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }

// const obj1 = new C(1, 2);
// console.log(obj1);

// const obj2 = Reflect.construct(C, [1, 2]);
// console.log(obj2);

// const obj3 = new C(1, 2);
// console.log(obj3);

// const obj4 = Reflect.construct(C, [1, 2]);
// console.log(obj4);

// console.log(obj2 === obj4);

// console.log('a' in obj1);
// console.log(Reflect.has(obj1, 'a'));

// const bob = {
//   name: 'Bob',
//   _hello() {
//     console.log(`hello ${this.name}`);
//   },
// };
// const tom = {
//   name: 'Tom',
//   _hello() {
//     console.log(`hello ${this.name}`);
//   },
//   get hello() {
//     return this._hello();
//   },
// };

// tom.hello;
// Reflect.get(tom, 'hello', bob);
