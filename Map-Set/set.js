const set = new Set();

set.add(2);
set.add('hoge');
set.add(2);
set.add('2');

set.delete(2);
console.log(set.has('2'));
console.log(set.size);

console.log(set.entries());
console.log(set.keys());
console.log(set.values());

console.log(set);
