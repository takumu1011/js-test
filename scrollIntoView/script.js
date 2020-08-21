const target = document.getElementById('target');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
