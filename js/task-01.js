"use strict";

// const parentUl = document.querySelector("#categories");
// const ulChildren = parentUl.querySelectorAll(".item");

// console.log(`Number of categories:`, ulChildren.length);

// ulChildren.forEach((el) => {
//   console.log(`Category:`, el.querySelector("h2").textContent);
//   console.log(`Elements:`, el.querySelectorAll("li").length);
// });

const parentUl =
  document.firstElementChild.lastElementChild.firstElementChild
    .nextElementSibling;
const ulChildren = [...parentUl.children];

console.log(`Number of categories:`, ulChildren.length);

ulChildren.forEach((el) => {
  console.log(`Category:`, el.firstElementChild.textContent);
  console.log(`Elements:`, el.lastElementChild.children.length);
});
