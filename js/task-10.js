"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amountInput = document.querySelector("input");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(amountInput.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
