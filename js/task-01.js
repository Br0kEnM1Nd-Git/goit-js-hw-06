"use strict";

const parentUl = document.querySelector("#categories");
const ulChildren = parentUl.querySelectorAll(".item");

console.log(`Number of categories:`, ulChildren.length);

ulChildren.forEach((el) => {
  console.log(`Category:`, el.querySelector("h2").textContent);
  console.log(`Elements:`, el.querySelectorAll("li").length);
});
