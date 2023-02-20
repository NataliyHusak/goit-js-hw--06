"use strict";
const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const items = document.querySelectorAll(".item");
items.forEach((el) => {
  const title = el.querySelector("h2").innerHTML;
  const countElements = el.querySelectorAll("li").length;
  console.log("Category:", title);
  console.log("Elements:", countElements);
});
