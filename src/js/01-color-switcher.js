const startBtn = document.querySelector('button[data-start]');
// console.log(startBtn);
const stopBtn = document.querySelector('button[data-stop]');
// console.log(stopBtn);
const bodyColor = document.querySelector('body');
// console.log(bodyColor);
let timeId = null;

startBtn.addEventListener('click', () => {
  timeId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtn.setAttribute('disabled', 'disabled');
});

stopBtn.addEventListener('click', () => {
  clearInterval(timeId);

  startBtn.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
