const boxes = document.querySelectorAll('.box');
const cb = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }else {
      entry.target.classList.remove('show');
    }
  })
};
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};
const io = new IntersectionObserver(cb, options);
boxes.forEach(box => {
  io.observe(box);
});