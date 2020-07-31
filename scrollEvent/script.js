const trg = document.getElementById('trg');
const trgP = trg.getBoundingClientRect().top + window.pageYOffset;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= trgP - window.innerHeight) {
    console.log('表示');
  }
});
