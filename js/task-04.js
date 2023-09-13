const counter = document.querySelector("#value");
let counterValue = parseInt(counter.textContent);
const btnPlus = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');

const counterPlus = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
const counterMinus = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

btnPlus.addEventListener("click", counterPlus);
btnMinus.addEventListener("click", counterMinus);
