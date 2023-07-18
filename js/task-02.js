const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const newIngredients = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  return element;
});

ingredientsList.append(...newIngredients);

// const fragment = document.createDocumentFragment();

// for (const ingredient of ingredients) {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   fragment.appendChild(li);
// }

// ingredientsList.appendChild(fragment);
