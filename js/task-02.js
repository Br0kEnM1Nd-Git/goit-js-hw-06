const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUl = document.querySelector("#ingredients");
let listLi = [];

ingredients.forEach((el) => {
  const newLi = document.createElement("li");
  const newP = document.createElement("p");
  newLi.classList.add("item");
  newP.textContent = el;
  newLi.appendChild(newP);
  listLi.push(newLi);
});

ingredientsUl.append(...listLi);
