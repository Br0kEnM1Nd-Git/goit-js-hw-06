const form = document.querySelector(".login-form");
form.addEventListener("submit", subFunc);
function subFunc(event) {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("Заповніть усі поля");
  } else {
    const userData = {
      email,
      password,
    };
    console.log(userData);
    form.reset();
  }
}
