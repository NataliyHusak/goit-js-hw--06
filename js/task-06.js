"use strict";

const textInput = document.querySelector("#validation-input");
const validLength = document.querySelector("input[data-length]");

textInput.addEventListener("blur", () => {
  if (textInput.value.length < validLength.dataset.length) {
    textInput.classList.add("invalid");
  } else {
    textInput.classList.add("valid");
  }
});
