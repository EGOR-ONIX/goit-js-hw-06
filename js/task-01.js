const categoriesArray = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach(function (element) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
