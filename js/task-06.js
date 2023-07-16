const input = document.getElementById("validation-input");

input.addEventListener("blur", (event) => {
  const lengthSymbols = Number(event.currentTarget.dataset.length);
  const userSymbols = event.currentTarget.value.trim().length;

  if (lengthSymbols === userSymbols) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
