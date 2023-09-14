const validationInput = document.querySelector("#validation-input");
const validLength = parseInt(validationInput.dataset.length);
validationInput.addEventListener("blur", validate);
function validate(event) {
  const curLength = event.currentTarget.value.length;
  if (curLength !== validLength) {
    validationInput.setAttribute("class", "invalid");
  } else {
    validationInput.setAttribute("class", "valid");
  }
}
