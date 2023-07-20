let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.getElementById("value");

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = `${counterValue}`;
});

btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = `${counterValue}`;
});
