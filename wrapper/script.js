let myObj = {};
let copyObj = myObj;
copyObj.name = 'taro';
console.log(myObj); //オブジェクトは参照型

console.log(myObj === copyObj); //true
console.log(myObj.constructor === copyObj.constructor); //true

console.log(typeof myObj); //objcet

let string = new String('hoge');
console.log(string); //String{'hoge'}
let str = 'hoge';
console.log(str); //hoge
let str2 = String('hoge');
console.log(str2); //hoge

console.log(typeof string); //object
console.log(typeof str); //string
console.log(typeof str2); //string

console.log(string.constructor); //String()
console.log(str.constructor); //String()
console.log(str2.constructor); //String()
console.log(string.constructor === str.constructor); //true

console.log(string[1]); //o
console.log(str[1]); //o

console.log(string instanceof String); //true
console.log(str instanceof String); //false
