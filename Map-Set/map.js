const map = new Map();

map.set(1, 'value1');
map.set(2, '値2');
map.set(3, '文字');
map.set(4, ['hoge', 'fuga', 4]);

map.delete(3);

console.log(map.has(2));
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map.size);

console.log(map.has('2'));
for (const [k, v] of map) {
  console.log(k, v);
}

console.log(map);
