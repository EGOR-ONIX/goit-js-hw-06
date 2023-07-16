const categoriesArray = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesArray.length}`);

categoriesArray.forEach(function (li) {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
});
