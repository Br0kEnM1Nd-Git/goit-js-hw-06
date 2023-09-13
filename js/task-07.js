const control = document.querySelector("#font-size-control");
const spText = document.querySelector("#text");
control.addEventListener("input", changeSize);
function changeSize(event) {
  const value = event.currentTarget.value;
  spText.style.fontSize = `${value}px`;
}
