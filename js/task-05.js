const inputText = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");
function handleInput(event) {
  if (event.currentTarget.value === "") {
    spanOutput.textContent = "Anonymous";
    return;
  }
  spanOutput.textContent = event.currentTarget.value;
}
inputText.addEventListener("input", handleInput);
