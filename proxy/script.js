const targetObj = {
  a: 0,
};

const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    target[prop] = value;
  },
  get: function (target, prop, value, receiver) {
    console.log(`[get]: ${prop}`);
    return target[prop];
  },
};
const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
pxy.a;
