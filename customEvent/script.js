const target = document.getElementById('target');
const btn = document.getElementById('btn');

const event = new Event('changeColor');

target.addEventListener('changeColor', function () {
  this.style.color = '#ff0000';
});

btn.addEventListener('click', function () {
  target.dispatchEvent(event);
});
