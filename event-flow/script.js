document.addEventListener('DOMContentLoaded', function () {
  const wrap = document.getElementById('wrap');
  const button = document.getElementById('button');
  /**
   * window
   */
  window.addEventListener('click', function () {
    console.log('bubbling: window');
  });
  window.addEventListener(
    'click',
    function () {
      console.log('capture: window');
    },
    true
  );

  /**
   * document.body
   */
  document.body.addEventListener('click', function () {
    console.log('bubbling: document.body');
  });
  document.body.addEventListener(
    'click',
    function () {
      console.log('capture: document.body');
    },
    true
  );

  /**
   * #wrap
   */
  wrap.addEventListener('click', function () {
    console.log('bubbling: #wrap');
  });
  wrap.addEventListener(
    'click',
    function () {
      console.log('capture: #wrap');
    },
    true
  );

  /**
   * #button
   */
  button.onclick = function () {
    console.log('target(js): #button');
  };
  button.addEventListener('click', function () {
    console.log('bubbling: #button');
  });
  button.addEventListener(
    'click',
    function () {
      console.log('capture: #button');
    },
    true
  );
});
