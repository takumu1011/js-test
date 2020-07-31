const animal = {
  neko: 'にゃん',
  inu: 'わん',
};
const pxy = new Proxy(animal, {
  get(target, prop, receiver) {
    return prop in target ? target[prop] : 'プロパティは存在していません';
  },
});

console.log(pxy.inu);
console.log(pxy.fish);
console.log(animal.inu);
console.log(animal.fish);
