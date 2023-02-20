"use strict";

const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (event) => {
  event.preventDefault();
  nameOutput.textContent = event.currentTarget.value || "Anonimus";
});
