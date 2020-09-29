localStorage.setItem(['name'], ['太郎']);

console.log(localStorage.getItem(['name']));

localStorage.clear();

console.log(localStorage.getItem('name'));

localStorage.setItem(['age'], ['20']);

console.log(localStorage.getItem('age'));

localStorage.removeItem('age');

console.log(localStorage.getItem('name'));
