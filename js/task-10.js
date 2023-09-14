function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const parentBox = document.querySelector("#boxes");
const inputBoxes = document.querySelector(`input[type="number"]`);
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");

inputBoxes.addEventListener("blur", checkValid);
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);

let value = 0;
function checkValid(event) {
  value = event.currentTarget.value;
  if (value <= 0) {
    alert("Введіть число від 1 до 100");
  }
}

let height = 30;
let width = 30;
function createBoxes() {
  if (value > 0) {
    for (let i = 0; i < value; i += 1) {
      const newDiv = document.createElement("div");
      newDiv.style.height = `${height}px`;
      newDiv.style.width = `${width}px`;
      height += 10;
      width += 10;
      const bgColor = getRandomHexColor();
      newDiv.style.backgroundColor = `${bgColor}`;
      parentBox.append(newDiv);
    }
  } else {
    alert("Введіть число від 1 до 100");
  }
}

function destroyBoxes() {
  parentBox.innerHTML = "";
  inputBoxes.value = "";
  height = 30;
  width = 30;
}
