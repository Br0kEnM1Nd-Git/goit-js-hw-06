function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const btnChange = document.querySelector(".change-color");
const spColor = document.querySelector(".color");
btnChange.addEventListener("click", changeColor);
function changeColor() {
  const ranColor = getRandomHexColor();
  bodyEl.style.backgroundColor = `${ranColor}`;
  spColor.textContent = `${ranColor}`;
}
