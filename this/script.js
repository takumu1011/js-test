//関数
function hoge() {
  console.log(this); //グローバルオブジェクト(window)
}
hoge();

//メソッド
const obj = {
  name: '太郎',
  getThis() {
    console.log(this); //obj
  },
  getName() {
    console.log(this.name); //太郎
  },
};
obj.getThis();
obj.getName();

//コンストラクタ
let Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.getThis = function () {
    console.log(this); //Person
  };
  this.getName = function () {
    console.log(this.name);
  };
};

let taro = new Person('太郎', 20);
taro.getThis();
taro.getName();

let object = {
  fn1() {
    console.log(this); //object
    let fn2 = (function () {
      console.log(this); //window
    })();
  },
};
object.fn1();

let foo = {
  func1: function (bar) {
    bar(); //window
    console.log(this); //foo
  },
};
foo.func1(function () {
  console.log(this);
});
