class MyClass {
  constructor() {}
}

const myClass = new MyClass();

const myClassAnother = new MyClass();

console.log(myClass === myClassAnother); //false
console.log(myClass instanceof MyClass); //true
console.log(myClassAnother instanceof MyClass); //true

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(3, 4);
console.log(point.x);
console.log(point.y);

class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();
counterA.increment();
console.log(counterA.count);
console.log(counterB.count);

class NumberWrapper {
  constructor(value) {
    this._value = value;
  }
  get value() {
    console.log('getter');
    return this._value;
  }
  set value(newValue) {
    console.log('setter');
    this._value = newValue;
  }
}

const numberWrapper = new NumberWrapper(1);

console.log(numberWrapper.value);
numberWrapper.value = 42;
console.log(numberWrapper.value);

class ConflictClass {
  constructor() {
    this.method = () => {
      console.log('インスタンスメソッド');
    };
  }
  method() {
    console.log('プロトタイプメソッド');
  }
}

const conflict = new ConflictClass();
conflict.method(); //インスタンスメソッド

class Parent {
  constructor(...args) {
    console.log('parentコンストラクタ', ...args);
    this.method = () => {
      console.log('parentメソッド');
    };
  }
  // method() {
  //   console.log('parentメソッド');
  // }
}

class Child extends Parent {
  constructor(...args) {
    super(...args);
    console.log('childコンストラクタ', ...args);
  }
}

const child = new Child('引数1', '引数2');
child.method();
