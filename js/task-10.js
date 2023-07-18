const resultBox = document.getElementById("boxes");
const input = document.getElementById("controls").firstElementChild;
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const MIN_BOXES = input.getAttribute("min");
const MAX_BOXES = input.getAttribute("max");

btnCreate.addEventListener("click", () => {
  const dataUser = Number(input.value);
  if (dataUser < MIN_BOXES || dataUser > MAX_BOXES) {
    alert(
      `Введіть коректну кількість елементів - більшу за ${MIN_BOXES}, але менше за ${MAX_BOXES}!`
    );
  } else {
    createBoxes(dataUser);
  }
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
  resultBox.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
