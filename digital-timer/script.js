function clock() {
  const myDay = ['日', '月', '火', '水', '木', '金', '土'];
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let day = now.getDay();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if (hour < 10) hour = '0' + hour;
  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  const clock1 = hour + ':' + min + ':' + sec;
  document.getElementById('clock-01').textContent = clock1.toLocaleString();

  window.setTimeout('clock()', 1000);
}
window.addEventListener('load', clock);
