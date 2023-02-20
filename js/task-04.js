"use strict";

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

const value = document.querySelector("#value");

let counterValue = 0;

const handleClickDec = () => {
  counterValue -= 1;
  return (value.innerHTML = counterValue);
};
const handleClickInc = () => {
  counterValue += 1;
  return (value.innerHTML = counterValue);
};

decrement.addEventListener("click", handleClickDec);
increment.addEventListener("click", handleClickInc);
