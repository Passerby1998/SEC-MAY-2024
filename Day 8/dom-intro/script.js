console.log("hello world!");

// assign DOM element to a variable

const h1 = document.querySelector("h1");
// const allH1 = document.querySelectorAll("h1");
const h1ByClassTitle = document.querySelector(".title");
const h1ByIdLogo = document.querySelector("#logo");

// console.log(h1);
// console.log(allH1);
// console.log(h1ByClassTitle);
// console.log(h1ByIdLogo);

console.dir(h1);
console.log(h1.innerText);
h1.innerText = "Ho ho you found me";
console.log(h1.innerText);

console.dir(h1ByClassTitle);
h1ByClassTitle.style.backgroundColor = "red";
h1ByClassTitle.style.color = "white";
h1ByClassTitle.style.padding = "20px";
