const trg = document.getElementById('trg');

console.log(trg.style.height); //インラインスタイルの場合height(pxなどの単位も取得される)
console.log(trg.getBoundingClientRect().height); //height + padding + border

console.log(trg.clientHeight); //height + padding
console.log(trg.offsetHeight); //height + padding + border　整数に丸める

console.log('%c------------------------', 'background-color: green;');

console.log(window.innerHeight); //スクロールバーを含んだウインドウの高さ
console.log(window.outerHeight); //タブやブックマークバーを含んだウインドウの高さ

console.log('%c------------------------', 'background-color: green;');

console.log(trg.offsetTop); //親からの相対的位置

const trgH = trg.getBoundingClientRect().top; //ウインドウの上端からの位置
const scrollTop = window.pageYOffset || document.documentElement.scrollTop; //スクロール量
console.log(trgH + scrollTop); //ウインドウトップからの位置
