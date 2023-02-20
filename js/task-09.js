"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

btnChangeColor.addEventListener("click", () => {
  color.innerHTML = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
  return;
});
