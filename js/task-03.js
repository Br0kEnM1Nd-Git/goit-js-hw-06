const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const parentUl = document.querySelector(".gallery");
// const newUl = document.createElement("ul");

// images.forEach(({ url, alt }) => {
//   const newLi = document.createElement("li");
//   const newImg = document.createElement("img");
//   newImg.src = url;
//   newImg.alt = alt;
//   newLi.appendChild(newImg);
//   newUl.appendChild(newLi);
// });

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}"; alt="${alt}"></img></li>`)
  .join("");

parentUl.insertAdjacentHTML("afterbegin", markup);
