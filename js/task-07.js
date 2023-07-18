const input = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

newFontSize();

input.addEventListener("input", newFontSize);

function newFontSize() {
  textSpan.style.fontSize = `${input.value}px`;
}
