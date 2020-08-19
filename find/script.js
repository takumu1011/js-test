const array = [5, 12, 8, 130, 44];

const found = array.find((num) => {
  return num > 10;
});

console.log(found);

const foundIndex = array.findIndex((num) => {
  return num > 10;
});
console.log(foundIndex);

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
];
function isCherries(fruit) {
  return fruit.name === 'cherries';
}
console.log(inventory.find(isCherries));
