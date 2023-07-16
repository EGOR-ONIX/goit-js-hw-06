const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() !== "") {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
