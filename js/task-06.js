const validationInput = document.querySelector("#validation-input");
const maxLength = parseInt(validationInput.dataset.length);
validationInput.addEventListener("blur", validate);
function validate(event) {
  const curLength = event.currentTarget.value.length;
  if (curLength > maxLength || curLength <= 0) {
    validationInput.setAttribute("class", "invalid");
  } else {
    validationInput.setAttribute("class", "valid");
  }
}
