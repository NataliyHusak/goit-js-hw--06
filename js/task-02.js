const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

const createIngridient = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.className = "item";
  console.log(list);
  return list;
});

ingredientsList.append(...createIngridient);
