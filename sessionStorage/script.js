sessionStorage.setItem(['name'], ['太郎']);

console.log(sessionStorage.getItem(['name']));

sessionStorage.removeItem('name');

console.log(sessionStorage.getItem(['name']));

sessionStorage.setItem(['key'], ['value']);

console.log(sessionStorage.getItem('key'));
console.log(sessionStorage);

sessionStorage.clear();

console.log(sessionStorage.getItem('key'));
