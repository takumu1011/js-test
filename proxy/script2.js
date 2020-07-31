const user = {
  firstName: 'John',
};

const pxy = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(target + 'の' + prop + 'へのアクセス処理の追加');
    return target[prop];
  },
  set(target, prop, value, receiver) {
    console.log(target + 'に' + prop + ':' + value + 'を追加');
    if (target.hasOwnProperty(prop)) {
      target[prop] = value;
    } else {
      console.log('そのプロパティは存在していません');
    }
  },
});
console.log(pxy.firstName);
pxy.a = 2;
console.log(pxy);
console.log(user);
console.log(user === pxy);
