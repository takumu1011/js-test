const myTextbox = document.getElementById('my-textbox');

myTextbox.addEventListener('keypress', checkName, false);

function checkName(evt) {
  let charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      displayWarning(
        `Please use lowercase letters only<br>charCode:${charCode}`
      );
    }
  }
}

let warningTimeout;
const warningBox = document.createElement('div');
warningBox.className = 'warning';
function displayWarning(msg) {
  warningBox.innerHTML = msg;
  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }
  warningTimeout = window.setTimeout(function () {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}

const link = document.getElementById('link');

link.addEventListener('click', function (evt) {
  console.log(evt);
  evt.preventDefault();
});
