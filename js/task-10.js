const resultBox = document.getElementById("boxes");
const input = document.getElementById("controls").firstElementChild;
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  const LENGTH_DIV = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${LENGTH_DIV + 10 * i}px`;
    box.style.height = `${LENGTH_DIV + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  resultBox.appendChild(fragment);
}

function destroyBoxes() {
  do {
    resultBox.firstElementChild.remove();
  } while (resultBox.firstElementChild !== null);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
